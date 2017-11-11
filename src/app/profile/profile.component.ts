import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: ['.repo-list{border-bottom: 1px solid rgba(250, 250, 250, 1)}']
})
export class ProfileComponent {
  user: any;
  repos: any[];
  username: string;
    constructor(private githubservice: GithubService) {
      this.user = false;
    }

    searchUser() {
      this.githubservice.updateUser(this.username);
      this.githubservice.getUser().subscribe(
        user => this.user = user
        // user => {
        //   console.log(user);
        // }
      );

      this.githubservice.getRepos().subscribe(
        repos => {
          this.repos = repos;
          console.log(repos);
        }
      );
    }
}
