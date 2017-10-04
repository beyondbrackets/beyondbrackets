import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Post } from "app/model/post.model";
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private post: Post;

  constructor(
    private postService: PostService,
    private routeParams: ActivatedRoute) { }

  ngOnInit() {
    let id = this.routeParams.snapshot.paramMap.get('id');
    this.postService.findOne(id).subscribe(p => this.post = p);
  }
}
