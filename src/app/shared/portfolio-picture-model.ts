export class PortfolioPictureModel {
  id: string;
  name: string;
  date: string;
  pictureURL: string;
  description: string;
  progress: number;

  constructor(param?: PortfolioPictureModel) {

    if (param) {
      Object.assign(this, param);
    }

  }

}
