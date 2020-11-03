import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface MockTest {
  code: string;
  name: string;
  status: string;
}

const REG_MOCK_TEST_DATA: MockTest[] = [
  {code: 'AWS-SAA', name: 'AWS-Solution Architect Associate', status: 'Completed'},
  {code: 'AWS-SAE', name: 'AWS-Solution Architect Expert', status: 'Not Completed'},
  {code: 'GCL-DEV', name: 'Google Cloud-Developer', status: 'Completed'},
  {code: 'ICL-DEV', name: 'IBM Cloud-Developer', status: 'Completed'},
  {code: 'SFC-DEV', name: 'SalesForce-Developer', status: 'Completed'},
  {code: 'JAV-DEV', name: 'Java-Developer', status: 'Completed'},
  {code: 'PYT-DEV', name: 'Python-Developer', status: 'Not Completed'},
  {code: 'COB-DEV', name: 'Cobol-Developer', status: 'Completed'},
  {code: 'PLI-DEV', name: 'PL/I-Developer', status: 'Not Completed'},
  {code: 'CPP-DEV', name: 'C++-Developer', status: 'Completed'},
  {code: 'CEE-DEV', name: 'C-Developer', status: 'Completed'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['code', 'name', 'status', 'action'];
  dataSource = new MatTableDataSource<MockTest>(REG_MOCK_TEST_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
