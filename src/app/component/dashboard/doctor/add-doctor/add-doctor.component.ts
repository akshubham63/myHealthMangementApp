import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  myAddDoctorForm!: FormGroup;
  title!: string;
  constructor(
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: any,
    private _dialogRef: MatDialogRef<AddDoctorComponent>
  ){
    this.title = data.title;
  }

  ngOnInit(): void {
  }

}
