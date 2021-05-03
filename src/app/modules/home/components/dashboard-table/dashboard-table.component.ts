import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {
  @Input() tableHeaders: Array<string> = [];
  @Input() dataProperties: Array<string> = [];
  @Input() list: Array<any> = [];
  @Input() title: string;
  //Output
  @Output('selectedData') emitSelectedProduct = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  selectData(data) {
    this.emitSelectedProduct.emit(data);
  }

}
