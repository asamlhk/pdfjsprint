import { Component } from '@angular/core';
import printJS from 'print-js'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  print() {
    printJS(this.src);
  }

  print2() {
    let pageNumber = 3;
    let dataurl = [];
    for (let i = 1; i <= pageNumber; i++) {
      dataurl.push(document.getElementById('page' + i).toDataURL())
    }


    let windowContent = '<!DOCTYPE html>';

    dataurl.forEach(
      d => {
        windowContent += '<img src="' + d + '">';
      }
    )




    const printWin = window.open('', '', 'width=' + screen.availWidth + ',height=' + screen.availHeight);
    printWin.document.open();
    printWin.document.write(windowContent);

    printWin.document.addEventListener('load', function () {
      printWin.focus();
      printWin.print();
      printWin.document.close();
      printWin.close();
    }, true);
  }
}