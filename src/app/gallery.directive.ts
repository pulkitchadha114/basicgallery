import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGallery]'
})
export class GalleryDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  imagechange(){
    var src:any = this.el.nativeElement.src;
    var preview:any = document.getElementById("pre")
    preview.src = src;
    var imageSlides = document.getElementsByClassName("img-slides");
    for(let i=0; i<imageSlides.length; i++){
      imageSlides[i].classList.remove("active");
    }
    this.el.nativeElement.parentElement.classList.add("active");
  }

}
