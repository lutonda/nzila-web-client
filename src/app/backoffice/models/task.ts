import { Chapter } from './chapter';
export class Task {
    _id: string;
    title: string;
    description: string;
    points: number=0;
    type: any = {};
    chapter: Chapter = new Chapter();
    constructor(title?: string, description?: string) {
        this.title = title;
        this.description = description;
    }

}
