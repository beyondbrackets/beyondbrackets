import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  id: string;

  constructor(private routeParams: ActivatedRoute) { }

  ngOnInit() {
    this.routeParams.params.subscribe(params => {
        this.id = params['id'];
      });
    }
}
