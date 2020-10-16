import { Association } from './association';
import { Course } from './course';

export class Role {
    _id: string;
    name: String;
    description: String;
    associations: Array<Association> = [];

    constructor(name?: string, description?: string) {
        this.name = name;
        this.description = description;
    }

}
