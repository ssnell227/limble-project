import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'limble-project';
  showTagList = false;
  
  toggleTagList(event: boolean) {
    this.showTagList = event
    console.log(this.showTagList)
  }

  
}
