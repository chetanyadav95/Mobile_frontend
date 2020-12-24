import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { GestureController } from '@ionic/angular';

@Directive({
  selector: '[appVideoSwiper]'
})
export class VideoSwiperDirective implements OnInit{
  constructor(private el: ElementRef, private renderer: Renderer2, private gestureCtrl: GestureController) {}

  ngOnInit(){
    const gesture = this.gestureCtrl.create({
      gestureName: 'video-swiper',
      el: this.el.nativeElement,
      canStart: () => { this.onStart() },
      onStart: () => { this.onStart() },
      onMove: () => { this.onMove() },
      onEnd: () => {this.onUp() }
    });

    gesture.enable();
  }
  private onStart(){
    this.renderer.setStyle(this.el.nativeElement, 'pointer-events', 'none')
  }
  private onMove(){
    this.renderer.setStyle(this.el.nativeElement, 'pointer-events', 'none')
  }
  private onUp(){
    this.renderer.setStyle(this.el.nativeElement, 'pointer-events', 'all')
  }
}
