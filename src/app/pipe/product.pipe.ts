import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'TitlePipe'})
export class ProductPipes implements PipeTransform{
    transform(value:string,gender:string): string{
    if(gender == 'Male'){
        return 'Mr. '+ value;
      }else {
        return 'Mrs. '+ value;
      }
    }
}