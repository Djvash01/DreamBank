import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ProductsService } from 'src/app/services/products.service';
import { UserState } from 'src/app/store/user/user.state';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  
  productsList = ['leasing','foreing currency exchange','Bank guarantee','remittance of founds','credit cards', 'debit cards'];

  form:FormGroup;
  @Select(UserState.getUserData) $userData : Observable<User>;

  constructor(private fb:FormBuilder, private productService: ProductsService) { }

  suscription: Subscription;

  ngOnInit(): void {
    this.form = this.fb.group({
      product: ['', Validators.required],
      cellphone: ['', Validators.required],
      monthly: ['', Validators.required]
    })
  }

  submit(){
    this.suscription = this.$userData.subscribe(user =>{
      const {product, cellphone, monthly} = this.form.value;
      const {id} = user;
      this.productService.requestNewProduct({
        id, product, cellphone, monthly
      });
    });
  }

  ngOnDestroy(): void {
    if(this.suscription)this.suscription.unsubscribe();
  }

}
