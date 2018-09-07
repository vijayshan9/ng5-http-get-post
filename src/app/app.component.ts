import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string='';
  age:number;
  found:boolean;
  title = 'ng5-http-get-post';
  constructor(private httpClient:HttpClient) { };
  onNameKeyUp(event:any)
  {
     this.name = event.target.value;
     this.found = false;
      //console.log(event.target.value);
  }
  getProfile(){
    this.httpClient.get(`https://my-json-server.typicode.com/vijayshan9/json-faker-directory/profiles/?name=${this.name}`)
    .subscribe(
      (data:any[]) => {
        //console.log(data);
        if (data.length) {
          this.age=data[0].age;
          this.found=true;
        }
      }
    )
    //console.log(this.name);
  }

  postProfile(){
    this.httpClient.post(`https://my-json-server.typicode.com/vijayshan9/json-faker-directory/profiles/`,
  
  {
    name:'mark',
    age:41
  })
    .subscribe(
      (data:any) => {
        console.log(data);
        //if (data.length) {
        //  this.age=data[0].age;
        //  this.found=true;
        //}
      }
    )
    //console.log(this.name);
  }
}
