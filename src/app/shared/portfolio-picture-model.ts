export class PortfolioPictureModel {
  name: string;
  id: string;
  pictureURL: string;
  node: string;
  storageRef: string;
  _date: string;

  constructor(param?: PortfolioPictureModel) {
    if (param) {
      this.name = param.name;
      this.id = param.id;
      this.pictureURL = param.pictureURL;
      this.node = param.node;
      this.storageRef = param.storageRef;
      // Object.assign(this, param);
      this._date = param._date;
    }
  }

  getDateOfEvent(): string {
    return this._date;
  }

  setDateOfEvent(date: string) {
    this._date = date;
  }

}
