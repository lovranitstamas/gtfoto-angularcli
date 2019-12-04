export class PortfolioPictureModel {
  name: string;
  id: string;
  date: string;
  pictureURL: string;
  node: string;
  storageRef: string;

  constructor(param?: PortfolioPictureModel) {

    if (param) {
      Object.assign(this, param);
    }

  }

}
