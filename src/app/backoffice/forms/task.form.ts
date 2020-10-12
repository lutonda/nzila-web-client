import { NgForm, FormArray, FormBuilder, Validators, AbstractControl } from "@angular/forms";

export class TaskForm {

    constructor(fb: FormBuilder) {
        return {
            name: ['', Validators.required],
            description: ['', Validators.required],
            type: [''],
            points: ['']
        };
    }


}