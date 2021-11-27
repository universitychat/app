import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat_history',
  templateUrl: './chat_history.component.html',
  styleUrls: ['./chat_history.component.css']
})
export class Chat_historyComponent implements OnInit {

  @Input() public history = '';

  constructor() { }

  ngOnInit() {
  }

}
