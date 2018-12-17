import { Component, ViewChild, ElementRef } from '@angular/core';
import { tween, styler, easing, listen } from 'popmotion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild('infoCentral')
  private infoCentral: ElementRef;
  
  @ViewChild('infoDireita')
  private infoDireita: ElementRef;
  
  // --
  
  @ViewChild('logoC1')
  private logoC1: ElementRef;
  
  @ViewChild('logoC2')
  private logoC2: ElementRef;
  
  @ViewChild('logoD1')
  private logoD1: ElementRef;
  
  @ViewChild('logoD2')
  private logoD2: ElementRef;
  
  // --------------------------------------
  
  ngAfterViewInit(){
    console.log( this.infoCentral );
  }
  
}
