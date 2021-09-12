var InputObservable = /** @class */ (function () {
    function InputObservable(input) {
        this.input = input;
        this.observers = [];
    }
    InputObservable.prototype.subscribe = function () {
        var _this = this;
        var observers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observers[_i] = arguments[_i];
        }
        observers.forEach(function (observer) {
            if (!_this.observers.includes(observer)) {
                _this.observers.push(observer);
            }
        });
    };
    InputObservable.prototype.unsubscribe = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    };
    InputObservable.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            observer.update(_this);
        });
    };
    return InputObservable;
}());
var ParagraphObserver = /** @class */ (function () {
    function ParagraphObserver(element) {
        this.element = element;
    }
    ParagraphObserver.prototype.update = function (observable) {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.input.value;
        }
    };
    return ParagraphObserver;
}());
var DivObserver = /** @class */ (function () {
    function DivObserver(element) {
        this.element = element;
    }
    DivObserver.prototype.update = function (observable) {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.input.value;
        }
    };
    return DivObserver;
}());
function makeInput() {
    var input = document.createElement('input');
    document.body.appendChild(input);
    return input;
}
function makeParagraph(content) {
    var p = document.createElement('p');
    p.innerText = content;
    document.body.appendChild(p);
    return p;
}
function makeDiv(content) {
    var div = document.createElement('div');
    div.innerText = content;
    document.body.appendChild(div);
    return div;
}
var input = new InputObservable(makeInput());
var p1 = new ParagraphObserver(makeParagraph('Paragrafo 1'));
var p2 = new ParagraphObserver(makeParagraph('Paragrafo 2'));
var div1 = new DivObserver(makeDiv('div 1'));
input.subscribe(p1, p2, div1);
input.input.addEventListener('keyup', function () {
    input.notify();
});
input.unsubscribe(p2);
