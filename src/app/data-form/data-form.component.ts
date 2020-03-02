import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.formulario = this.fb.group({
      nome: [null],
      email: [null]
    });
  }

}
