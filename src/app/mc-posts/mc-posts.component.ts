import { Component, OnInit, ViewChild } from '@angular/core';
import * as htmlToImage from 'html-to-image';
@Component({
  selector: 'app-mc-posts',
  templateUrl: './mc-posts.component.html',
  styleUrls: ['./mc-posts.component.scss'],
})
export class McPostsComponent implements OnInit {
  @ViewChild('logo') logo!: any;
  @ViewChild('headerText') headerText: any;
  logoSelected = false
  headTextSelected = false
  constructor() {}
  ngOnInit(): void {}
  clickToCapture() {
    const node = document.getElementById('content');
    if (node)
      htmlToImage
        .toPng(node)
        .then(function (dataUrl) {
          const img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });
  }
  selectLogoHandler = (e: any) =>{
    this.logo.nativeElement.src = e.target.result;
  this.logo.nativeElement.style.opacity=1}
    selectHeadTextHandler = (e:any)=>{
      this.headerText.nativeElement.src = e.target.result
    this.headerText.nativeElement.style.opacity=1}
  readUrl(input: any,type=0) {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      if(type===0)
      reader.onload = this.selectLogoHandler;
      if(type===1)
      reader.onload = this.selectHeadTextHandler;
      reader.readAsDataURL(input.files[0]);
    }
  }
}
