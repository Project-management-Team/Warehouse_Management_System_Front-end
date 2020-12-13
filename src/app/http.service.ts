import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewUser} from './data-templates/NewUser';
import {ReceivedUser} from './data-templates/received-data/ReceivedUser';
import {User} from './data-templates/User';

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  // tslint:disable-next-line:typedef
  postData(user: User){

    const body = {};
    const a = '?login=bbrother&password=qwer1234';
    const params = {login: user.login, password: user.password};
    return this.http.post('http://wmsproject.azurewebsites.net/api/User/login' + a, body);
  }

  // tslint:disable-next-line:typedef
  userCreationPost(user: NewUser) {
    const body = {
      Login: user.Login,
      Password: user.Password,
      Name: user.Name,
      IsAdmin: user.IsAdmin
    };
    return this.http.post('http://wmsproject.azurewebsites.net/api/User/register', body);
  }

  // tslint:disable-next-line:typedef
  usersGet() {
    return this.http.get('http://wmsproject.azurewebsites.net/api/User/all');
  }

  // tslint:disable-next-line:typedef
  userAuthorizationPost(user: User) {
    const body = {};
    const userInfo = `?login=${user.login}&password=${user.password}`;
    return this.http.post('http://wmsproject.azurewebsites.net/api/User/login' + userInfo, body);
  }

  // tslint:disable-next-line:typedef
  warehousesGet() {
    return this.http.get('http://wmsproject.azurewebsites.net/api/Warehouse/warehouses');
  }

  // tslint:disable-next-line:typedef
  warehouseTreeGet(whID) {
    return this.http.get(`http://wmsproject.azurewebsites.net/api/Warehouse/tree?whId=${whID}`);
    // return this.http.get(url);
  }

  // tslint:disable-next-line:typedef
  warehouseSearchGet(whID, searchstr) {
    return this.http.get(`http://wmsproject.azurewebsites.net/api/Warehouse/search?whId=${whID}&searchPhrase=${searchstr}`);
    // return this.http.get(url);
  }

  // tslint:disable-next-line:typedef
  invoiceItemsGet(whID) {
    return this.http.get(`http://wmsproject.azurewebsites.net/api/Warehouse/items?whId=${whID}`);
  }

  // tslint:disable-next-line:typedef
  warehousesAllGet() {
    return this.http.get(`http://wmsproject.azurewebsites.net/api/Warehouse/all`);
  }

  // tslint:disable-next-line:typedef
  zonesAllGet() {
    return this.http.get(`http://wmsproject.azurewebsites.net/api/WHZone/all`);
  }

  // tslint:disable-next-line:typedef
  shelfsAllGet() {
    return this.http.get(`http://wmsproject.azurewebsites.net/api/WHLocker/all`);
  }

  // tslint:disable-next-line:typedef
  elementsAllGet() {
    return this.http.get(`http://wmsproject.azurewebsites.net/api/WHCell/all`);
  }

  // tslint:disable-next-line:typedef
  putElementPost(cellID, itemID) {
    return this.http.get(`http://wmsproject.azurewebsites.net/api/WHCell/put-item?cellId=${cellID}&itemId=${itemID}`);
  }

  // tslint:disable-next-line:typedef
  addWareHousePost(Name, Address) {
    const body = {name: Name, address: Address};
    return this.http.post(`http://wmsproject.azurewebsites.net/api/Warehouse`, body);
  }

  // tslint:disable-next-line:typedef
  addZonePost(ZoneName, whID) {
    const body = {
      name: ZoneName,
      whid: whID,
      height: 0,
      width: 0,
      row: 0,
      column: 0
    };
    return this.http.post(`http://wmsproject.azurewebsites.net/api/WHZone`, body);
  }

  // tslint:disable-next-line:typedef
  addShelfsPost(ShelfName, zoneID) {
    const body = {
      name: ShelfName,
      whzoneId: zoneID,
      height: 0,
      width: 0,
      row: 0,
      column: 0
    };
    return this.http.post(`http://wmsproject.azurewebsites.net/api/WHLocker`, body);
  }

  // tslint:disable-next-line:typedef
  addElementsPost(CellName, shelfID) {
    const body = {
      name: CellName,
      whlockerId: shelfID,
      itemId: null,
      status: 0,
      row: 0,
      column: 0
    };
    return this.http.post(`http://wmsproject.azurewebsites.net/api/WHCell`, body);
  }

  // tslint:disable-next-line:typedef
  removeWHDelete(whID) {
    return this.http.delete(`http://wmsproject.azurewebsites.net/api/Warehouse?whId=${whID}`);
  }

  // tslint:disable-next-line:typedef
  removeZoneDelete(zoneID) {
    return this.http.delete(`http://wmsproject.azurewebsites.net/api/WHZone?zoneId=${zoneID}`);
  }

  // tslint:disable-next-line:typedef
  removeShelfsDelete(shelfID) {
    return this.http.delete(`http://wmsproject.azurewebsites.net/api/WHLocker?lockerId=${shelfID}`);
  }

  // tslint:disable-next-line:typedef
  removeElementsDelete(cellID) {
    return this.http.delete(`http://wmsproject.azurewebsites.net/api/WHCell?cellId=${cellID}`);
  }

  // tslint:disable-next-line:typedef
  addBtnPost(cellID, itemID) {
    const body = {};
    return this.http.post(`http://wmsproject.azurewebsites.net/api/WHCell/put-item?cellId=${cellID}&itemId=${itemID}`, body);
  }

  // tslint:disable-next-line:typedef
  bookBtnPost(cellID) {
    const body = {};
    return this.http.post(`http://wmsproject.azurewebsites.net/api/WHCell/book?cellId=${cellID}`, body);
  }

  // tslint:disable-next-line:typedef
  moveBtnPost(cellID, itemID) {
    const body = {};
    return this.http.post(`http://wmsproject.azurewebsites.net/api/WHCell/put-item?cellId=${cellID}&itemId=${itemID}`, body);
  }

  // tslint:disable-next-line:typedef
  scrapBtnPost(itemID) {
    return this.http.post(`http://wmsproject.azurewebsites.net/api/Items/scrap?itemId=${itemID}`, {});
  }

  // tslint:disable-next-line:typedef
  itemCreationPost(SerialNumber, Description) {
    const body = {serialNumber: SerialNumber, description: Description};
    return this.http.post(`http://wmsproject.azurewebsites.net/api/Items/`, body);
  }

  // tslint:disable-next-line:typedef
  putItemPost(cellID: number, itemID) {
    return this.http.post(`http://wmsproject.azurewebsites.net/api/WHCell/put-item?cellId=${cellID}&itemId=${itemID}`, {});
  }

  // tslint:disable-next-line:typedef
  truckPost(invoiceNO, truckCellS) {
    const body = {
      number: invoiceNO,
      width: 0,
      height: 0,
      truckCellS
      // truckCells: [
      //   {
      //     itemId: 0, // null if item non selected
      //     column: 0,
      //     row: 0
      //   }
      // ]
    };
    return this.http.post(`http://wmsproject.azurewebsites.net/api/Truck`, body);
  }
}
