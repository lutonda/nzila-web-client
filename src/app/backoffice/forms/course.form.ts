import { NgForm, FormArray, FormBuilder, Validators, AbstractControl } from "@angular/forms";

export class CourseForm {

    constructor(fb: FormBuilder) {
        return {
            name: ['', Validators.required],
            description: ['', Validators.required],
            category: ['', Validators.required],
            coverPic: [''],
            dueDate: ['']
        }
    }
}