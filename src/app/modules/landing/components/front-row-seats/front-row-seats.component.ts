import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-row-seats',
  templateUrl: './front-row-seats.component.html',
  styleUrls: ['./front-row-seats.component.scss']
})
export class FrontRowSeatsComponent implements OnInit {
  buttonConfig = {
    style: {
      color: '#FFF',
      background: 'transparent linear-gradient(90deg, #1FE1E9 0%, #5E33D1 ' +
        '44%, #D34848 74%, #FFB33F 100%) 0% 0% no-repeat padding-box'
    }
  };
  perks = ['Subscription Payment Model', 'No Fee Cancellation Policy', 'Subscription Payment Model']
  perkDetails = 'No commitment, cancel anytime. Never worry about forgetting a payment again!'

  constructor() { }

  ngOnInit(): void {
  }

}
