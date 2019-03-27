import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-upload-media',
  templateUrl: './single-upload-media.component.html',
  styleUrls: ['./single-upload-media.component.css']
})
export class SingleUploadMediaComponent implements OnInit {
  uploadmedias: Boolean = true;
  linkactive: String = 'singleuploadmedia';
  constructor() { }
  ngOnInit() {

  }

}
