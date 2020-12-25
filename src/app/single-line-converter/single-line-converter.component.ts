import { Component, OnInit } from '@angular/core';
import { convert } from 'encoding';

@Component({
  selector: 'app-single-line-converter',
  templateUrl: './single-line-converter.component.html',
  styleUrls: ['./single-line-converter.component.less']
})
export class SingleLineConverterComponent implements OnInit {
  convertWord = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  convert(originalString: string): void {
    this.convertWord = convert(originalString, 'utf8', 'windows1255');
  }

  copyToClipboard(convertContent: HTMLInputElement): void {
    convertContent.disabled = false;
    convertContent.select();
    document.execCommand('copy');
    convertContent.disabled = true;
  }
}
