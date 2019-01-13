import { Component, ViewChild, ElementRef } from '@angular/core';

import { BoxItensAnim } from './box-itens.anim';

@Component({
  selector: 'app-pagina-popmotion',
  templateUrl: './pagina-popmotion.component.html',
  styleUrls: ['./pagina-popmotion.component.scss']
})
export class PaginaPopmotionComponent {

  @ViewChild('box')
  box: ElementRef<any>;
  
  animation: any;

  constructor() { }
  
  ngAfterViewInit(){
    console.log('PaginaPopmotionComponent.ngAfterViewInit');
    console.log('elements', this.box);
    this.animation = BoxItensAnim.animarItens( this.box.nativeElement.querySelectorAll('.item') );
  }
  
  ngOnDestroy(){
    console.log('PaginaPopmotionComponent.ngOnDestroy');
    if( this.animation ) this.animation.stop();
  }
  
}
