import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  slug!: any;
  article!: any;
  dataRecieved: boolean=false;
  isHindiRequired: boolean=false;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogsService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.slug = params.get('slug');
      this.blogService.findArticle(this.slug).subscribe(
        (response) => {
          // Assign the retrieved articles to a variable
          this.article = response;
          this.dataRecieved=true;
        },
        (error) => {
          // Handle any errors that occur during the API call
          this.router.navigate(['/error']);
        }
      );
    });
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  showHindiText(){
    this.isHindiRequired=true;
  }
  
}
