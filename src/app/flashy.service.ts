import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlashyService {

  url = "https://json.flashy.dev/profile-";

  constructor(private http:HttpClient) { }


  getProfile(id:any = null){
    let endpoint = this.url+id;
    console.log(endpoint);
    return this.http.get<any>(endpoint); 
  }

}
