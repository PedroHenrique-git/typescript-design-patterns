interface Observer {
    update(...args: unknown[]): void;
}

interface Observable {
    subscribe(...observer: Observer[]): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
}

class InputObservable implements Observable {
  private observers: Observer[] = [];

  constructor(public input: HTMLInputElement) {}

  subscribe(...observers: Observer[]): void {
    observers.forEach((observer) => {
      if (!this.observers.includes(observer)) {
        this.observers.push(observer);
      }
    });
  }

  unsubscribe(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  notify(): void {
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: Observable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.input.value;
    }
  }
}

class DivObserver implements Observer {
  constructor(public element: HTMLDivElement) {}

  update(observable: Observable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.input.value;
    }
  }
}

function makeInput(): HTMLInputElement {
  const input = document.createElement('input');
  document.body.appendChild(input);
  return input;
}

function makeParagraph(content: string): HTMLParagraphElement {
  const p = document.createElement('p');
  p.innerText = content;
  document.body.appendChild(p);
  return p;
}

function makeDiv(content: string): HTMLDivElement {
  const div = document.createElement('div');
  div.innerText = content;
  document.body.appendChild(div);
  return div;
}

const input = new InputObservable(makeInput());
const p1 = new ParagraphObserver(makeParagraph('Paragrafo 1'));
const p2 = new ParagraphObserver(makeParagraph('Paragrafo 2'));
const div1 = new DivObserver(makeDiv('div 1'));

input.subscribe(p1, p2, div1);

input.input.addEventListener('keyup', () => {
  input.notify();
});

input.unsubscribe(p2);
