import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-success-requesst',
  templateUrl: './success-requesst.component.html',
  styleUrls: ['./success-requesst.component.scss']
})
export class SuccessRequesstComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  showSuccessNotification(){
    this.snackBar.open(
      'We are studying your order, we will contact you soon'
     ,'', 
     {
      panelClass: ['success-snackbar'],
      duration: 4000
     });
  }

}
