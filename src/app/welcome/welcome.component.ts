import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent {
    urls:any[] = [
        "https://artgolwebdev.github.io/anguflashy/profile/1" , 
        "https://artgolwebdev.github.io/anguflashy/profile/2"
    ];
}
