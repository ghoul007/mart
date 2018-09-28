import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    CommonModule,
    PosRoutingModule
  ],
  declarations: [PostComponent]
})
export class PosModule { }
