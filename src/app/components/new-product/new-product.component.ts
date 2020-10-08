import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  
  productsList = ['leasing','foreing currency exchange','Bank guarantee','remittance of founds','credit cards', 'debit cards'];

  form:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      product: ['', Validators.required],
      cellphone: ['', Validators.required],
      monthly: ['', Validators.required]
    })
  }

  submit(){

  }

}
