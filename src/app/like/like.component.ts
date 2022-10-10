import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {


  @Input('isActive') isActive!: boolean;
  @Input('likesCount') likesCount!: number;

  onClick(){
    this.isActive = !this.isActive;

    if (this.isActive) {
      this.likesCount++;
    }
    else if (!this.isActive) {
      this.likesCount--;
    }
  }

}
