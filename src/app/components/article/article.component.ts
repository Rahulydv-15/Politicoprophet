import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  slug!: any;
  article!: any;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.slug = params.get('slug');
      this.blogService.findArticle(this.slug).subscribe(
        (response) => {
          // Assign the retrieved articles to a variable
          this.article = response;
          console.log(this.article)
        },
        (error) => {
          // Handle any errors that occur during the API call
          console.error(error);
        }
      );
    });
  }
}
