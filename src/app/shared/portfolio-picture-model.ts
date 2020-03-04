export class PortfolioPictureModel {
  id: string;
  title: string;
  node: string;
  filename: string;
  createDate: string;

  /*constructor(id: string, title: string, node: string, filename: string, createDate: string) {
    this.id = id;
    this.title = title;
    this.node = node;
    this.filename = filename;
    this.createDate = createDate;
  }*/

  get idF(): string {
    return this.id;
  }

  set idF(id: string) {
    this.id = id;
  }

  get titleF(): string {
    return this.title;
  }

  set titleF(title: string) {
    this.title = title;
  }

  get nodeF(): string {
    return this.node;
  }

  set nodeF(node: string) {
    this.node = node;
  }

  get filenameF(): string {
    return this.filename;
  }

  set filenameF(filename: string) {
    this.filename = filename;
  }

  get dateOfEventF(): string {
    return this.createDate;
  }

  set dateOfEventF(createDate: string) {
    this.createDate = createDate;
  }

}

