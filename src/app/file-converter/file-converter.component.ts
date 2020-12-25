import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { convert } from 'encoding';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-file-converter',
  templateUrl: './file-converter.component.html',
  styleUrls: ['./file-converter.component.less']
})
export class FileConverterComponent implements OnInit, OnDestroy {
  reader = new FileReader();
  fileName: string;
  readEvent: Subscription;
  constructor() {
  }

  ngOnInit(): void {
    this.readEvent = fromEvent(this.reader, 'load').pipe(
      tap((text) => {
        const converter: string = convert(this.reader.result, 'utf8', 'windows1255').toString();
        const fileConverter = new Blob(converter.split('/n'), {type: 'text/plain;charset=utf-8'});
        saveAs(fileConverter, `${this.fileName}-converter.txt`);
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.readEvent.unsubscribe();
  }

  convertFile(files: FileList): void {
    const file = files.item(0);
    if (file) {
      this.fileName = file.name.substring(0, file.name.lastIndexOf('.'));
      this.reader.readAsText(file);
    }
  }
}
