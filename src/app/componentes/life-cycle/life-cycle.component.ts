import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent {
  
  @Input('name')
  name = '[SEM NOME]';
  
  constructor() { 
    console.log('LifeCycleComponent.constructor', this.name);
  }

  //----------------------------------------
  
  ngOnChanges(){
    console.log('LifeCycleComponent.ngOnChanges', this.name);
  }
  ngOnInit(){
    console.log('LifeCycleComponent.ngOnInit', this.name);
  }
  ngDoCheck(){
    console.log('LifeCycleComponent.ngDoCheck', this.name);
  }
  ngAfterContentInit(){
    console.log('LifeCycleComponent.ngAfterContentInit', this.name);
  }
  ngAfterContentChecked(){
    console.log('LifeCycleComponent.ngAfterContentChecked', this.name);
  }
  ngAfterViewInit(){
    console.log('LifeCycleComponent.ngAfterViewInit', this.name);
  }
  ngAfterViewChecked(){
    console.log('LifeCycleComponent.ngAfterViewChecked', this.name);
  }
  ngOnDestroy(){
    console.log('LifeCycleComponent.ngOnDestroy', this.name);
  }
}
