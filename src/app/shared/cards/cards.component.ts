import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/home/image.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() data: any;
  //model
  // public Image: any = [];
  constructor() {
    this.data = [];
  }
  // private imageService: ImageService
  ngOnInit(): void {
  }

  // getArtistImage() {
  //   this.imageService.getArtistImage().subscribe(res => {
  //     this.ArtistFiveImage = res.slice(-5)
  //   })
  // }

}
