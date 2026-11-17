import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-gif-list-item',
  templateUrl: './gif-list-item.html',
})
export class GifListItem {
  imageUrl = input.required<string>();

}
