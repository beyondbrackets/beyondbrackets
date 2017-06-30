import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostService } from './services/post.service';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavigationComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
