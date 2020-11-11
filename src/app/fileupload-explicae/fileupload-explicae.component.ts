import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileupload-explicae',
  templateUrl: './fileupload-explicae.component.html',
  styleUrls: ['./fileupload-explicae.component.css'],
})
export class FileuploadExplicaeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  fileContent: any = '';

  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function (x) {
      self.fileContent = fileReader.result;
    };
    fileReader.readAsText(file);
  }
}
