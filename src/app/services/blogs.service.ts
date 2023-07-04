import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<any> {
    return this.http.get('https://politicoprophetbackend.onrender.com/api/articles');
  }

  findArticle(title: string): Observable<any> {
    const url = `https://politicoprophetbackend.onrender.com/api/find/${title}`;
    return this.http.post(url, null);
  }
}
