import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-try-button',
  templateUrl: './try-button.component.html',
  styleUrls: ['./try-button.component.scss']
})
export class TryButtonComponent implements OnInit {

  @Input() buttonConfig: {style? : any, text?: string} = {}

  constructor() { }

  ngOnInit(): void {
  }

}
