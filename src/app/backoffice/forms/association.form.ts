import { NgForm, FormArray, FormBuilder, Validators, AbstractControl } from "@angular/forms";

export class AssociationForm {

    constructor(fb: FormBuilder) {
        return {
            description: ['', Validators.required],
            role: ['', Validators.required],
            people: ['', Validators.required],
        };
    }


}