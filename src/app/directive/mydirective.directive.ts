import {Directive,ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector: '[ng-appMyDirective]'
})

export class MydirectiveDirective{
    constructor(private ef:ElementRef){
        ef.nativeElement.style.display='none';
    }
}
