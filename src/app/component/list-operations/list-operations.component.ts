import { Component, OnInit } from '@angular/core';
import {OperationService} from '../../services/operation.service';
import { Observable, from } from 'rxjs';
import {Operation} from '../../model/operation';


@Component({
  selector: 'app-list-operations',
  templateUrl: './list-operations.component.html',
  styleUrls: ['./list-operations.component.css']
})
export class ListOperationsComponent implements OnInit {

  constructor(private operationService: OperationService) { }

  operations: Observable<Operation[]>;

  ngOnInit(): void {
  
    this.operationService.getAllOperations().subscribe(
      data =>{
        this.operations=data;
      }
    )
    
  }
  
}

