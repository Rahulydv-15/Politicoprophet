import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ArticleComponent } from './components/article/article.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'blogs', component: BlogsComponent},
  { path: 'article/:slug', component: ArticleComponent }
  // Add more route configurations as needed
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
