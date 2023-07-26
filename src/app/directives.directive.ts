import { Directive ,ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appDirectives]'
})
export class DirectivesDirective {
@Input() buttonstatus=true

  constructor(private elementref:ElementRef ) {}
  ngOnChanges():void{
    if(this.buttonstatus){
      this.elementref.nativeElement.style.color='red'
    }
    else{
      this.elementref.nativeElement.style.color='blue'
    }

  }
}
