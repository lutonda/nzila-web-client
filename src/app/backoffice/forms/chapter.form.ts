import { NgForm, FormArray, FormBuilder, Validators, AbstractControl } from "@angular/forms";

export class ChapterForm {

    constructor(fb: FormBuilder) {
        return {
            description: ['ona', Validators.required],
            isPreviousDependents: ['']
        };
    }


}