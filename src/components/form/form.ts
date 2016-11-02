import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'form',
  templateUrl: 'form.html'
})
export class FormComponenet {

  @Input() inputs = [];
  form: FormGroup;

  constructor(
    public fb: FormBuilder
  ) {
    this.form = this.makeForm;
  }

  ngOnInit(){

  }

  private get makeForm(){
    let inputs = {};
    this.inputs.forEach(item => {
      inputs[item.name] = [item.value]
    })
    return this.fb.group(inputs);
  }

}
