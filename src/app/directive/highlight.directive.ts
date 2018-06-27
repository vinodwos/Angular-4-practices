import {Directive, ElementRef, Renderer2, Input,HostBinding, HostListener}  from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective{
    @Input('defaultColor') defaultColor: string;
    @HostBinding('style.backgroundColor') bgColor: any;
    @HostListener('mouseenter') mouseenter (eventdata) {
        console.log('Insde mouse enter');
        this.bgColor=this.defaultColor;
    }

    @HostListener('mouseleave') mouseleave (eventdata) {
        console.log('Insde mouse leave');
        this.bgColor='transparent';
    }
    constructor(private elementRef: ElementRef, private renderer: Renderer2){
        // this.elementRef.nativeElement.style.backgroundColor="green";
        // this.renderer.setStyle(this.elementRef.nativeElement,'background-color',this.defaultColor);
    }
}