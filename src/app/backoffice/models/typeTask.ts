import { Task } from './task';
import { Chapter } from './chapter';
export class TypeTask {
    _id: string;
    name: string;
    description: string;
    tasks: Array<Task> = [];
    constructor(name?: string, description?: string) {
        this.name = name;
        this.description = description;
    }
}