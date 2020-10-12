import { Category } from './category';
import { Chapter } from './chapter';
export class Course {

    _id: string;
    name: string;
    description: string;
    category: Category=new Category();
    coverPic: string;
    isPublished: boolean = false;
    chapters: Array<Chapter> = [];
    dueDate: Date;
    constructor(name?: string, description?: string ) {
        this.description = description;
        this.name = name;
    }

}