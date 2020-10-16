import { Observable } from 'rxjs';
import { Role } from './../../../models/role';
import { RoleService } from './../../../../services/role.service';
import { FormBuilder } from '@angular/forms';
import { Association } from './../../../models/association';
import { AssociationForm } from './../../../forms/association.form';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-backoffice-association-create',
  templateUrl: './association-create.component.html',
  styleUrls: ['./association-create.component.scss']
})
export class AssociationCreateComponent implements OnInit {

  roles: Array<Role> = []
  associated: Array<String> = ['lutonda@gmail.com', 'john@do.u']
  constructor(
    private fb: FormBuilder,
    private roleService: RoleService) { }


  ngOnInit(): void {
    this.roleService.getAll().subscribe(data => this.roles = data.data)
  }

  association: Association = new Association();
  associationForm = this.fb.group(new AssociationForm(this.fb));
  saveAssociationForm() {
    alert('save')
  }
  public model: string;

  states = ['', 'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(0),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  addAssociated(item) {
    this.states[0] = ''
    if (item !== null)
      this.associated.push(item.item);
  }
  removeAssociated(key) {
    alert(key)
    this.associated.splice(key, 1);

  }
  onkeypress(item) {
    this.states[0] = item.target.value;
  }
}
