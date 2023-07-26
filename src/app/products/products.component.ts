import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PipecomponentPipe } from '../pipecomponent.pipe';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
title="Employee Details"  //interpolation
position="center"  //property
productname="Fastrack"
slicing=["Blue","black","White","Red"];
currency=2000;
form=""
uppercase="sandhiya"
productchange(){
  this.productname="Titan"
}
pipes=""
number:number=0
multiplepipe=["blue","black","White","Red"];
// joinpipe=this.multiplepipe.join(" ")

// structural directive
switchcasevalue=""
countries:string[]=["India","US","South Korea","China","Switzerland"]
states:string[]=["Tamil Nadu","Kerala","Karnataka","Goa"]
District:string[]=["Chennai","coimbatore","Dindigul"]

isValid=false
buttonclicked=true

}
