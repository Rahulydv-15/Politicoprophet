import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ArticleComponent } from './components/article/article.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SomethingWentWrongComponent } from './components/something-went-wrong/something-went-wrong.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'article/:slug', component: ArticleComponent },
  {
    path: 'error',
    component: SomethingWentWrongComponent,
  },
  // Add more route configurations as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
