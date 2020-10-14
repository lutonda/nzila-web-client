import { Category } from './category';
import { Chapter } from './chapter';
import { AppService } from './../../services/app.service';
export class Course {

    _id: string;
    code: string;
    name: string;
    description: string;
    category: Category = new Category();
    coverPic: string;
    isPublished: boolean = false;
    chapters: Array<Chapter> = [];
    dueDate: Date;
    constructor(name?: string, description?: string) {
        this.description = description;
        this.name = name;
    }

    getCover(): string {
        return this.coverPic = 'http://' + AppService.serverAddress + '/uploads/courses/' + this.code + '/cover.jpg'
    }

}