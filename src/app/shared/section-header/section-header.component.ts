import { Component, Input, OnInit } from '@angular/core';
//👌
@Component({
  selector: 'ngprj-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {
 @Input() title:string = '';
 @Input() buttonLabel = 'vai a...';
 @Input() buttonClass = 'btn-link';
 @Input() buttonLink = '#';
  constructor() { }

  ngOnInit(): void {
  }

}
