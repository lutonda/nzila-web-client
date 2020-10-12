import { Course } from './course';
export class Chapter {

    _id: string;
    description: string;
    isPreviousDependents: boolean = false;
    tasks: Array<any> = [];
    course: Course = new Course;

    constructor(description?: string, isPreviousDependents: boolean = false) {
        this.description = description;
        this.isPreviousDependents = isPreviousDependents;
    }

}