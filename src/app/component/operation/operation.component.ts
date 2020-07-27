import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Operation } from 'src/app/model/operation';
import { OperationService } from '../../services/operation.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  valid: boolean = true;
  error: string;
  respuesta: Operation;
  operationsaveform = new FormGroup({
    min_number: new FormControl('', [Validators.required, Validators.minLength(1)]),
    max_number: new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  constructor(private operationService: OperationService) { }

  ngOnInit() {
  }


  saveOperation(saveOperation) {

    if (this.MinNumber.value !== null && this.MaxNumber.value !== null && this.MinNumber.value !== '' && this.MaxNumber.value !== '') {
      if (this.MaxNumber.value > this.MinNumber.value) {
        this.valid = true;
        this.save(this.MinNumber.value, this.MaxNumber.value);

      } else {
        this.valid = false;
        this.error = "El número máximo debe ser mayor al número mínimo";
      }

    } else {
      this.valid = false;
      this.error = "Indroduzca sólo números válidos";
    }
  }
  get MinNumber() {
    return this.operationsaveform.get('min_number');
  }
  get MaxNumber() {
    return this.operationsaveform.get('max_number');
  }
  save(min: number, max: number) {
    this.operationService.addOperation(min, max).subscribe(
      data => {
        this.respuesta = data;
      }
    )
  }
}