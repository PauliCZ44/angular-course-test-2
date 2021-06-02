import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('likesCount') likesCount: number;
  @Input('isLiked') isLiked: boolean;

  handleClick() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) this.likesCount++;
    else this.likesCount--;
  }
}
