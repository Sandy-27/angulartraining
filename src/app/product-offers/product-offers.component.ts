import { Component } from '@angular/core';
import { from, iif, of, reduce } from 'rxjs';

@Component({
  selector: 'app-product-offers',
  templateUrl: './product-offers.component.html',
  styleUrls: ['./product-offers.component.css']
})
export class ProductOffersComponent {
ngOnInit(){
  let states=["TN","Karnataka","Kerala"]
  of(states).subscribe(data=>console.log(data))
  from(states).subscribe(data=>console.log(data))

  let iifop=iif(()=>(Math.random()+1)%2===0,of("even case"),of("odd case"))
  iifop.subscribe(a=>console.log(a))

  let items=[
    { item:1,color:"red"},
    { item:2,color:"black"},
    { item:3,color:"green"},
    { item:4,color:"blue"}
  ]
  let result=from(items).pipe(reduce((acc,itemd)=>acc+itemd.item,0))
  result.subscribe(a=>console.log(a))

  
}
}
