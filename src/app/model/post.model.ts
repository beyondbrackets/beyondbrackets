export class Post {
    date: Date;
    title: string;
    url: string;
    contents: string;

    constructor(date: Date, title: string, url: string, contents: string) {
        this.date = date;
        this.title = title;
        this.url = url;
        this.contents = contents;
    }
}