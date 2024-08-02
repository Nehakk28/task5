import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CardsComponent } from '../../units/cards/cards.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardsComponent,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  constructor(private api:ApiService){}
  products:any=""
  ngOnInit()
  {
    this.api.getProducts().subscribe((data:any)=>{this.products=data})
  }

}
