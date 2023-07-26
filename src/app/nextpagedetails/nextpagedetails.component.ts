import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { WatchService } from '../watch.service';

@Component({
  selector: 'app-nextpagedetails',
  templateUrl: './nextpagedetails.component.html',
  styleUrls: ['./nextpagedetails.component.css']
})
export class NextpagedetailsComponent {
  constructor(private route:ActivatedRoute,private router:Router,private service:WatchService){}
  id:number=0
  Id: number = 0;
 data:any
     ngOnInit(){
        this.route.params.subscribe(params=>{
          this.Id=params['id'];
          this.id=this.Id
          this.service.getdetailswithid(this.id)
          .subscribe({
            next: (data: any) => {
              this.data = data;
              console.log(data.id)
            }
          });
          console.log(this.id)
        });
     }
     showdescrition(){
      this.router.navigate(['description'],{relativeTo:this.route});
     }
     showoffers(){
      this.router.navigate(['offers'],{relativeTo:this.route})

     }
}
