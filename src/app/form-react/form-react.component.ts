import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-react',
  templateUrl: './form-react.component.html',
  styleUrls: ['./form-react.component.scss']
})
export class FormReactComponent implements OnInit {

  theForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.theForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]]
      // name: ['', Validators.compose([ Validators.minLength(1), Validators.maxLength(5)]]
    });
  }

  ngOnInit() {
  }

}
