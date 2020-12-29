import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarubozuService {
  apiUrl = environment.apiUrl + 'marbozzu/'

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.apiUrl)
  }

  get(key: string){
    return this.http.get(this.apiUrl + key)
  }

  delete(id){
    return this.http.delete(this.apiUrl + `del/${id}`)
  }

  createBlog(title, content, image){
    return this.http.post(this.apiUrl + 'blog', {title, content, image})
  }

  createTutorial(title, embededurl){
    return this.http.post(this.apiUrl + 'tutorial', {title, embededurl})
  }

  create(title, content, stockname, image, key){
    return this.http.post(this.apiUrl + key, {title, content, stockname, image})
  }
}
