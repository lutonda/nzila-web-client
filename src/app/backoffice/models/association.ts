import { Role } from './role';
import { Course } from './course';

export class Association {
    _id: string;
    description: String;
    role: Role = new Role();
    people: any;
    course: Course = new Course();
    isActive: boolean;
    constructor(description?: string) {
        this.description = description;
    }

}
