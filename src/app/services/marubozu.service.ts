import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarubozuService {
  apiUrl = environment.apiUrl + 'marbozzu/'
  activeTab = new Subject<number>()

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

  createBlogWithBlob(title, content, blobData, ext, image?){
    const formData = new FormData()
    formData.append('image', new Blob([blobData.url]), `img.${ext}`)
    formData.append('title', title)
    formData.append('content', content)
 
    return this.http.post(`${this.apiUrl}blog`, formData)
    // return this.http.post(this.apiUrl + 'blog', {title, content, image})
  }

  createBlogWithFile(title, content, file: File){
    const formData = new FormData()
    const ext = file.name.split('.').pop();
    formData.append('image', file, `${file.name}.${ext}`);
    formData.append('title', title)
    formData.append('content', content)
 
    return this.http.post(`${this.apiUrl}blog`, formData)
    // return this.http.post(this.apiUrl + 'blog', {title, content, image})
  }

  createTutorial(title, embededurl){
    return this.http.post(this.apiUrl + 'tutorial', {title, embededurl})
  }
  
  createWithBlob(title, content, stockname, key, blobData, name, ext, image?){
    const formData = new FormData()
    formData.append('image', blobData, `${name}.${ext}`)
    formData.append('title', title)
    formData.append('content', content)
    formData.append('stockname', stockname)
 
    return this.http.post(`${this.apiUrl}${key}`, formData)
    // return this.http.post(this.apiUrl + 'blog', {title, content, image})
  }

  createWithFile(title, content, stockname, key, file: File){
    const formData = new FormData()
    const ext = file.name.split('.').pop();
    formData.append('image', file, `${file.name}.${ext}`);
    formData.append('title', title)
    formData.append('content', content)
    formData.append('stockname', stockname)
 
    return this.http.post(`${this.apiUrl}${key}`, formData)
    // return this.http.post(this.apiUrl + key, {title, content, stockname, image})
  }
}
