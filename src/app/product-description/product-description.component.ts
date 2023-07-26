import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {
     //subject  subject acts as subscriber
     sub=new ReplaySubject()
     subject=new Subject();
     asyn=new AsyncSubject();
     ngOnInit(){
      this.subject.next(1)
      this.subject.subscribe(value=>console.log(value))
      this.subject.next("Hi");
      this.subject.next("sandhiya");

      const bsub = new BehaviorSubject(12);
      console.log("behaviour subject");
      bsub.subscribe(d=>console.log(d));
      bsub.next(200);

      console.log("ReplaySubject")
      this.sub.subscribe(a=>{console.log(a)})
      this.sub.next(1);
      this.sub.next(200);
      this.sub.error("errror")
      this.sub.next(100);
      this.sub.subscribe(a=>{console.log(a)})

      console.log("asyncSubject")
      this.asyn.subscribe(a=>console.log(a))
       this.asyn.next("a")
       this.asyn.next("b")
       this.asyn.next(1),
       this.asyn.complete()
     }
}
