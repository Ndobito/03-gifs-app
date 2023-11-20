import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text" (keyup.enter)="searchTag()" #txtTagInput class="form-control" placeholder="Buscar gifs..." >
  `
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService){}

  // searchTag(newTag:string):void{
  searchTag():void{
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = "";

  }
}
