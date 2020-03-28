export class PortfolioPictureModel {
  id: string;
  nodeId: string;
  subfolder: string;
  category: string;
  title: string;
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

  get nodeIdF(): string {
    return this.nodeId;
  }

  set nodeIdF(nodeId: string) {
    this.nodeId = nodeId;
  }

  get subfolderF(): string {
    return this.subfolder;
  }

  set subfolderF(subfolder: string) {
    this.subfolder = subfolder;
  }

  get categoryF(): string {
    return this.category;
  }

  set categoryF(category: string) {
    this.category = category;
  }

  get titleF(): string {
    return this.title;
  }

  set titleF(title: string) {
    this.title = title;
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

