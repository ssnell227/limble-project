import { Component, OnChanges } from '@angular/core';
import userData from '../assets/data/users'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'limble-project';
  showTagList = false;
  currentText: string;
  users: object[] = userData;
  matchedUser: string;

  toggleTagList(event: boolean) {
    this.showTagList = event
    console.log(this.showTagList)
  }

  updateText(event: string) {
    this.currentText = event;
    console.log(this.currentText)
  }
  
  updateMatchedUser(event: string) {
    this.matchedUser = event
    console.log(this.matchedUser, 'matched user')
  }
}
