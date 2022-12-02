import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  openForm!: FormGroup;

  constructor(private fb:FormBuilder,
              private router:Router) { }

  ngOnInit(): void {
    this.openForm=this.fb.group({
      email:new FormControl(),
      name:new FormControl()
    });
  }

  onSubmit() {
    this.router.navigate(['select-you-receiver'])
  }
}
