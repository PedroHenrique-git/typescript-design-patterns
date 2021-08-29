import { Memento } from './memento';

export class ConcreteMemento implements Memento {
  constructor(private name: string, private date: Date, private filePath: string, private fileFormat: string) {}

  getDate(): Date {
    return this.date;
  }

  getName(): string {
    return this.name;
  }

  getFilePath(): string {
    return this.filePath;
  }

  getFileFormat(): string {
    return this.fileFormat;
  }
}
