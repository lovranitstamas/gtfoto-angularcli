export class FileModel {
  file: File;
  id: string;
  name: string;
  date: string;
  pictureURL: string;
  description: string;
  progress: number;
  // createdAt: Date = new Date();

  constructor(file: File) {
    this.file = file;
  }
}
