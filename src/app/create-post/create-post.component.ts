import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from "app/model/post.model";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private postService: PostService, public fb: FormBuilder) { }

  ngOnInit() {
  }

  public writeForm = this.fb.group({
    date: ['date', Validators.required],
    title: ['title', Validators.required],
    contents: ['contents', Validators.required],
  });

  createPost() {
    let url: string = "http://localhost:8080/api/posts";

    let date = this.writeForm.controls.date.value;
    let title = this.writeForm.controls.title.value;
    let contents = this.writeForm.controls.contents.value;

    let post: Post = new Post(date, title, contents);

    console.log(post);
    
    this.postService.createPost(url, post)
      .subscribe(
      result => console.log(result)
      );
  }

}
