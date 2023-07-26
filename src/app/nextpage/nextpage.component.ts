import { Component, OnDestroy, OnInit ,OnChanges, Input} from '@angular/core';
import { WatchService } from '../watch.service';
import { watch } from '../watch';
import { HttpClient } from '@angular/common/http';
import { filter, Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css']
})
export class NextpageComponent implements OnInit, OnDestroy,OnChanges {
  error:any
  message="server error"
  @Input() name:string='OnChanges'
  private mysub: Subscription = new Subscription;
   data:watch[]=[];
  constructor(private watchservice:WatchService,private http:HttpClient,private route:Router){}
ngOnChanges(){
  console.log("this is onchanges")
}
ngOnInit(){
  console.log("nb");
this.watchservice.getdetails().subscribe({
  next:
  (data:any)=>{
  this.data=data},
  error:(error:any)=>this.error=error.error.message
});
  console.log(this.data)


    //promise (single data,no subscribe,no operator) 
    var promise = new Promise(data => {
      console.log("promise.....")
      setTimeout(() => {
        data("this is promise")
        data("this is promise1")
        data("this is promise2")
        data("this is promise3")
      }, 1000)
    })
    promise.then(result => console.log(result))  

    //observable(multiple vlues)  
    var obs = new Observable(data => {
      console.log("observable......")
    //  let count=0
      setTimeout(() => {
        // count=count+1
        // data.next(count)     
         data.next("this is Observable")
         data.next("this is Observable1")
         data.next("this is Observable2")
         data.next("this is Observable3")
      }, 1000);
    })
    .pipe(
      filter(data=>data=="this is Observable")
      )
   this.mysub=obs.subscribe(res => console.log(res))  
     
  }
   //while setinterval it will inc all time so to unsub using ondestroy
   ngOnDestroy(){
this.mysub.unsubscribe();
console.log("destroyed")
   }


   update(){
  console.log("success")
   }

   formspage(){
this.route.navigateByUrl("/formspage")
   }
}
