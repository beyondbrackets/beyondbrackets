import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from "app/model/post.model";
import { MarkdownModule } from 'angular2-markdown';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private post: Post;
  
    constructor(private postService: PostService) { }
  
    ngOnInit() {
      this.postService.getMostRecent().subscribe(p => this.post = p);
    }

}
