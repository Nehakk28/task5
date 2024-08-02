import { Component } from '@angular/core';
import { CardsComponent } from '../../units/cards/cards.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  constructor(private routeld:ActivatedRoute,private api:ApiService){}
data:any=[]
ngOnInit(){
  this.api.getProducts().subscribe((res:any)=>{
    let id=this.routeld.snapshot.paramMap.get('id')
    let response=res
    let product=response.filter((e:any)=>e.id==id)
    this.data=product[0]
  })
}
}
