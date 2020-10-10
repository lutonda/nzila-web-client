import { NgForm, FormArray, FormBuilder, Validators, AbstractControl } from "@angular/forms";

export class ChapterForm {

    constructor(fb: FormBuilder) {
        return {
            title: ['', Validators.required],
            number: [null, [Validators.required, Validators.min(1)]],
            language: [''],
            parts: fb.array([])
        };
    }


}