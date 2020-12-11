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
    return this.http.get(`http://wmsproject.azurewebsites.net/api/Warehouse/api/Warehouse/tree?whId=${whID}`);
  }
}
