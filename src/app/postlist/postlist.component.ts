import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from "app/model/post.model";
import { MarkdownModule } from 'angular2-markdown';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  private posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAll().subscribe(p => this.posts = p);
  }

}
