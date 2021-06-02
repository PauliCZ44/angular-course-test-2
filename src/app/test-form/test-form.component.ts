import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  submit(f) {
    console.log(f);
  }
}
