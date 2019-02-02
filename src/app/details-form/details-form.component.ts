import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {
  detailsForm:FormGroup;
  details: string;
  detailsform_fb:FormGroup;
  details_fb: string;
  sports=["cricket","football"]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.detailsform_fb=this.fb.group({
      Name:["",[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      School:["",[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      sports:["cricket"],
      Address: this.fb.array([this.addressFormGroup()])
      
    });
//valueChanges for Name
    this.detailsform_fb.get('Name').valueChanges.subscribe(
      value => {
        console.log(value);
      }
    );
    //value Changes For formgroup
    this.detailsform_fb.valueChanges.subscribe(
      value => {
        console.log(JSON.stringify(value));
      }
    );
  }
  addressFormGroup(){
    return this.fb.group({
      Street:[""],
      Landmark:[""]
    })
  }
 
  showDetails_fb(){
    console.log(this.detailsform_fb.value);
    this.details_fb=JSON.stringify(this.detailsform_fb.value)
  }
  handleAddAddress(){
(<any>this.detailsform_fb.get("Address")).push(this.addressFormGroup())
  }

}
