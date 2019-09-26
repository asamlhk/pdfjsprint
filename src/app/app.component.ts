import { Component } from '@angular/core';
import printJS from 'print-js'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  print() {
    printJS(this.src);
  }
}