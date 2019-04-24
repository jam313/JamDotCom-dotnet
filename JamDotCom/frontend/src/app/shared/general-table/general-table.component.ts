import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from './table-datasource';

@Component({
  selector: 'general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.css']
})
export class GeneralTableComponent implements OnInit {
  @Input() data: any[]; 
  @Input() columns: string[];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableDataSource;

  ngOnInit() {
    this.dataSource = new TableDataSource(this.paginator, this.sort, this.data);
  }
}
