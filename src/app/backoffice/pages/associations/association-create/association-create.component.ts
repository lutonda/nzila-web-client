import { FormBuilder } from '@angular/forms';
import { Association } from './../../../models/association';
import { AssociationForm } from './../../../forms/association.form';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backoffice-association-create',
  templateUrl: './association-create.component.html',
  styleUrls: ['./association-create.component.css']
})
export class AssociationCreateComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  association: Association = new Association();
  associationForm = this.fb.group(new AssociationForm(this.fb));
  saveAssociationForm(){
    alert('save')
  }
}
