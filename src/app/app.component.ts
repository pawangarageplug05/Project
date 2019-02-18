import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news';
  users:any;
  
  constructor(public http:HttpClient){


     this.http.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=be29fa957d6b4223ad43a05719080c18').subscribe(user=>{
      this.users = user;
      console.log(this.users);
  });
}
goSports(){
  this.http.get('https://newsapi.org/v2/top-headlines?sources=espn&apiKey=be29fa957d6b4223ad43a05719080c18').subscribe(user=>{
    this.users = user;
    console.log(this.users);
});

}
goEnter(){
  this.http.get('https://newsapi.org/v2/top-headlines?sources=entertainment-weekly&apiKey=be29fa957d6b4223ad43a05719080c18').subscribe(user=>{
    this.users = user;
    console.log(this.users);
});
}
goTech(){
  this.http.get('https://newsapi.org/v2/top-headlines?sources=recode&apiKey=be29fa957d6b4223ad43a05719080c18').subscribe(user=>{
    this.users = user;
    console.log(this.users);
});
}
goBusiness(){
  this.http.get('https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=be29fa957d6b4223ad43a05719080c18').subscribe(user=>{
    this.users = user;
    console.log(this.users);
});
}
goScience(){
  this.http.get('https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=be29fa957d6b4223ad43a05719080c18').subscribe(user=>{
    this.users = user;
    console.log(this.users);
});
}
}
