import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Post } from '../model/post.model'


@Injectable()
export class PostService {
    private backend: string = "http://localhost:8080/api";

    constructor(private http: Http) {
    }

    getAll(): Observable<Post[]> {
        let post$ = this.http
            .get(`${this.backend}/posts`, { headers: this.getHeaders() })
            .map(mapPosts);
        return post$;
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    }
}

function mapPosts(response: Response): Post[] {
    return response.json().map(toPost);
}

function toPost(r: any): Post {
    return r;
}