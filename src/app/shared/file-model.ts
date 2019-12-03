export class FileModel {
  id: string;
  name: string;
  date: string;
  pictureURL: string;
  description: string;

  constructor(param?: File) {
    Object.assign(this, param);
  }
}
