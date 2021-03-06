import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'g1Copy';
  @Output() emmitSearch: EventEmitter<any>  = new EventEmitter();
  @Output() onOpen: any = new EventEmitter();
  @Input() logo: string;
  @Input() menu: string;
  
  constructor() {}

  ngOnInit(): void {}

  search(value: string) {
    this.emmitSearch.emit(value);
  }

  openMenu() {
    this.onOpen.emit(true);
  }
}
