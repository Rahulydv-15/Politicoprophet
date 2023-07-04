import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent {
  articles!: any[];
  constructor(private blogService: BlogsService) {}
  ngOnInit(): void {
    this.blogService.getArticles().subscribe(
      (response) => {
        // Assign the retrieved articles to a variable
        this.articles = response;
      },
      (error) => {
        // Handle any errors that occur during the API call
        console.error(error);
      }
    );
  }
}
