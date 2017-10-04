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

    getMostRecent(): Observable<Post> {
        let post$ = this.http
            .get(`${this.backend}/posts/latest`, { headers: this.getHeaders() })
            .map(mapPost);
        return post$;    
    }

    findOne(id: any): Observable<Post> {
        let post$ = this.http
        .get(`${this.backend}/posts/${id}`, { headers: this.getHeaders() })
        .map(mapPost);
        return post$;      
    }

    getAll(): Observable<Post[]> {
        let post$ = this.http
            .get(`${this.backend}/posts`, { headers: this.getHeaders() })
            .map(mapPosts);
        return post$;
    }

    createPost(url: string, param: any): Observable<any> {
        let post = JSON.stringify(param);
        return this.http
            .post(this.backend + url, post, { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    }
}

function mapPost(response: Response): Post {
    return response.json();
}

function mapPosts(response: Response): Post[] {
    return response.json().map(toPost);
}

function toPost(r: any): Post {
    return r;
}