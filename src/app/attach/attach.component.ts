import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-attach',
  templateUrl: './attach.component.html',
  styleUrls: ['./attach.component.css']
})
export class AttachComponent {

  constructor() { }

  @Input() fileItem: {name: string};

}
