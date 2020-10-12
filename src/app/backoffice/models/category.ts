export class Category {

    _id: string;
    name: string;
    description: string;
    constructor(name?: string, description?: string ) {
        this.description = description;
        this.name = name;
    }

}