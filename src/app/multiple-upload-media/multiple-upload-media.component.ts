import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-upload-media',
  templateUrl: './multiple-upload-media.component.html',
  styleUrls: ['./multiple-upload-media.component.css']
})
export class MultipleUploadMediaComponent implements OnInit {
  uploadmedias: Boolean = true;
  linkactive: String = 'multipleuploadmedia';

  constructor() { }

  ngOnInit() {
  }

}
