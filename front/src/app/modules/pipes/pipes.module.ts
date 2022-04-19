import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BigNumberPipe} from '../../pipes/big-number.pipe';
import {WeiToISYPipe} from '../../pipes/wei-to-isy.pipe';
import {WeiToWholeISYPipe} from '../../pipes/wei-to-whole-isy.pipe';
import {Hex2Str} from '../../pipes/hex-to-str.pipe';
import {ToGweiPipe} from '../../pipes/to-gwei.pipe';
import {TrimExtra} from '../../pipes/trim-extra-data.pipe';
import {AbiMethodPipe} from '../../pipes/abi-method.pipe';

@NgModule({
  declarations: [
    BigNumberPipe,
    WeiToISYPipe,
    WeiToWholeISYPipe,
    TrimExtra,
    ToGweiPipe,
    Hex2Str,
    AbiMethodPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BigNumberPipe,
    WeiToISYPipe,
    WeiToWholeISYPipe,
    Hex2Str,
    ToGweiPipe,
    TrimExtra,
    AbiMethodPipe,
  ]
})
export class PipesModule {
}
