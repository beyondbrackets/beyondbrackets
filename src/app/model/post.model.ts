export class Post {
    date: Date;
    title: string;
    contents: string;

    constructor(date: Date, title: string, contents: string) {
        this.date = date;
        this.title = title;
        this.contents = contents;
    }
}