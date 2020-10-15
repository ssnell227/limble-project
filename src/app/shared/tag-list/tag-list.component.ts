import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.sass']
})
export class TagListComponent implements OnInit, OnChanges {

  constructor() { }
  
  @Input('users') users
  @Input('currentText') currentText: string;
  filteredUsers: object[];

  @Output() sendMatchedUser = new EventEmitter<string>();

  private updateMatchedUser () {
    this.sendMatchedUser.emit(this.filteredUsers[0].name)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    let nameSubStr = this.currentText.substring(this.currentText.lastIndexOf('@')+1).toLowerCase()
    this.filteredUsers = [...this.users].filter(user => user.name.toLowerCase().includes(nameSubStr))
    console.log(this.filteredUsers, 'filtered users')
    this.updateMatchedUser()
  }

  ngOnInit(): void {
    console.log(this.users, this.currentText)
  }

}
