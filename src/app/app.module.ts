import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostService } from './services/post.service';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MarkdownModule } from 'angular2-markdown';
import { CreatePostComponent } from "app/create-post/create-post.component";

import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path : 'posts', component: PostsComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'write',
  //  component: CreatePostComponent
    // canActivate: [LoginRouteGuard],
    // canDeactivate: [SavePostGuard]
  // },
  { path: 'posts/:id', component: PostComponent },  
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PostComponent,
    PostsComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavigationComponent,
    PostlistComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MarkdownModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
