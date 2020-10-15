import { Course } from './course';

export class Association {
    _id: string;
    description: String;
    role: any;
    people: any;
    course: Course = new Course();
    isActive: boolean;
    constructor(description?: string) {
        this.description = description;
    }

}
