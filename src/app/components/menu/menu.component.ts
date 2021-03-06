import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  options = {
    accounts:[
    {description:'Account Summary', link:'/dashboard/accountSummary'},
    {description:'Account', link:'/dashboard/account'}
  ],
    transactions:['Inquire Transactions', 'Inquire Transactions', 'Bill Payments'],
    services: [ 'Account Statements', 'Enroll New Account', 'Enroll a Credit Card', 'Card Replacement', 'New Checkbook']
  }

  constructor() { }

  ngOnInit(): void {
  }

}
