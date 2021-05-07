import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../state/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() action: string = "";
  @Input() user: User;
  @Output('submitForm') formEmitter = new EventEmitter();
  form: FormGroup;
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeForm();
    this.checkAction();
  }

  checkAction() {
    if(this.action === 'view') {
      this.form.patchValue(this.user);
      console.log(this.user);
      this.form.disable();
    }
  }

  checkRoutes() {
    this.activatedRoute.snapshot.paramMap.get("action");
  }

  initializeForm() {
    this.form = this.fb.group({
       id: [''],
       name: [''],
       bio: [''],
       gender: [''],
       active: [false]
     })
   }

   edit() {
     this.action= "update";
     this.form.enable();
   }

   submit() {
     this.formEmitter.emit({form: this.form, action: this.action});
   }
}
