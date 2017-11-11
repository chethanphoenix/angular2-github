import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {
  private username: string;
  private client_id = '3445c52dafe7e97ff14e';
  private client_secret = '83d57220af5aed4c8326cd5d9bc7ae537a64b410';
  constructor(private _http: Http) {
    console.log('Constructed GitHubService....');
    this.username = 'chethanphoenix';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(response  => response.json());
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(response  => response.json());
  }

  updateUser(username: string) {
    this.username = username;
  }
}


