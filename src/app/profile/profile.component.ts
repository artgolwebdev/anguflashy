import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlashyService } from '../flashy.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
    profile:any = [];

    constructor(
      private route : ActivatedRoute , 
      private flashy : FlashyService
    ){}

    ngOnInit():void{
      this.route.paramMap.subscribe((params)=>{
          const id = params.get('id');

          this.flashy.getProfile(id).subscribe((data)=>{
            this.profile = data;
          })
      })
    }
}
