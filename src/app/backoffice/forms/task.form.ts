import { NgForm, FormArray, FormBuilder, Validators, AbstractControl } from "@angular/forms";

export class TaskForm {

    constructor(fb: FormBuilder) {
        return {
            title: ['', Validators.required],
            description: ['', Validators.required],
            type: [''],
            points: ['']
        };
    }


}