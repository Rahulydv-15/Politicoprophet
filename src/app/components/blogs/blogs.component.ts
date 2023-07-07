import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent {
  articles!: any[];
  dataRecieved: boolean=false;
  constructor(private blogService: BlogsService,private sanitizer: DomSanitizer, private router: Router) {}
  ngOnInit(): void {
    this.blogService.getArticles().subscribe(
      (response) => {
        // Assign the retrieved articles to a variable
        this.articles = response;
        this.dataRecieved=true;
      },
      (error) => {
        // Handle any errors that occur during the API call
        this.router.navigate(['/error']);
      }
    );
  }
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
