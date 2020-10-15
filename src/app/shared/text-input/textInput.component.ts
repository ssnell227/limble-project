import {
  Component,
  OnInit,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './textInput.component.html',
  styleUrls: ['./textInput.component.sass'],
})
export class textInputComponent implements AfterViewInit {
  constructor(private _element: ElementRef) {}

  @Output() toggleTagListEvent = new EventEmitter<boolean>();

  @ViewChild('textBox') textBox: ElementRef<HTMLTextAreaElement>;

  private requestShowTagList() {
    this.toggleTagListEvent.emit(true);
  }
  private requestHideTagList() {
    this.toggleTagListEvent.emit(false);
  }

  checkForTag() {
    const box = this.textBox.nativeElement.value;
    if (box.slice(-2) === ' @' || (box.length === 1 && box[0] === '@')) {
      this.requestShowTagList();
    } else if (box.slice(-1) === ' ' || !box.length) {
      this.requestHideTagList();
    }
  }

  ngAfterViewInit(): void {}
}
