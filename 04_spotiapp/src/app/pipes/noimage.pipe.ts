import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    // console.log(images);
    if ( images.length > 0) {
      // console.log(images[0].url);
      return images[0].url;
    } else {
      // return 'assets/img/noimage.png';
      return 'https://www.freeiconspng.com/uploads/no-image-icon-7.gif';
    }

  }

}
