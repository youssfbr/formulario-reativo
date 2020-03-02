import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {

    this.formulario = this.fb.group({
      nome: [null],
      email: [null]
    });
  }

  onSubmit(): void {
    console.log(this.formulario);

    this.http.post('https://httpbin.org/post', this.formulario.value).subscribe( dados => {
      console.log(dados),
      this.resetar();
    },
      (error: any) => console.log(error)
    );
  }

  resetar(): void {
    this.formulario.reset();
  }

}
