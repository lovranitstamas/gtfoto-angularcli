export class PortfolioPictureModel {
  name: string;
  id: string;
  pictureURL: string;
  node: string;
  storageRef: string;
  private _date: string; //

  constructor(param?: PortfolioPictureModel) {
    if (param) {
      this.name = param.name;
      this.id = param.id;
      this.pictureURL = param.pictureURL;
      this.node = param.node;
      this.storageRef = param.storageRef;
      // Object.assign(this, param);
      this.dateOfEvent = param._date;
    }
  }

  get dateOfEvent(): string {
    return this._date;
  }

  set dateOfEvent(date: string) {
    this._date = date;
  }

}
