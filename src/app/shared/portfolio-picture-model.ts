export class PortfolioPictureModel {
  id: number;
  name: string;
  date: string;
  pictureURL: string;
  description: string;

  constructor(param?: PortfolioPictureModel) {

    if (param) {
      Object.assign(this, param);
    }

  }
}
