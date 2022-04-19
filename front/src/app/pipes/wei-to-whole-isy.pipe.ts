import {PipeTransform, Pipe} from '@angular/core';
import {convertWithDecimals} from '../utils/functions';

@Pipe({
    name: 'weiToWholeISY'
})

export class WeiToWholeISYPipe implements PipeTransform {

    transform(val: string | number): string {
        return convertWithDecimals(val, false, false, 18).split('.')[0];
    }
}
