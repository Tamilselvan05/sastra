import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
import {MatSort} from '@angular/material/sort';
@Component({
  selector: 'app-paststudlist',
  templateUrl: './paststudlist.component.html',
  styleUrls: ['./paststudlist.component.css']
})
export class PaststudlistComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(public api: ApiService) {
   
  }
  displayedColumns: string[] = ['regNo', 'name', 'yearPassing', 'batch', 'department', 'currentDesignation', 'companyName', 'Action'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngOnInit() {

    // this.dataSource.paginator = this.paginator;
    this.api.paststudgetRegister().subscribe((data: any) => {
      console.log(data.data, 'studentlistpastregister')
      // this.dataSource = data;
      this.getTable(data.data);
      // console.log('table data', this.dataSource);

    })
  }

  delete(elm: any) {
    this.dataSource.data = this.dataSource.data.filter(i => i !== elm)
  }
  

  deleteApi(index: number) {
    this.api.registerDelete().subscribe((data:any)=>{
      data.splice(index, 1);
      // this.user = data
      // console.log(this.users.data[0].title,'datachking')
    })
  }

  getTable(userData:any) {
      this.dataSource = new MatTableDataSource(userData);
      if(this.sort){
        this.dataSource.sort = this.sort;
      }
      this.dataSource.paginator = this.paginator;
  }
}




export interface studentElement {
  regNo: number;
  name: string;
  yearPassing: string;
  batch: string;
  department: string;
  currentDesignation: string;
  companyName: string
  action: string;
  // regNo:number;
}



const ELEMENT_DATA: studentElement[] = [
  { regNo: 2015789694, name: "Shree", yearPassing: "2018", batch: "2020-2023", department: "computer sciense", currentDesignation: "SoftwareEngineer", companyName: "BnyMellon", action: "" },
  { regNo: 2015789695, name: "Harini", yearPassing: "2018", batch: "2020-2023", department: "computer sciense", currentDesignation: "SoftwareEngineer", companyName: "BnyMellon", action: "gggg", },
  { regNo: 2015789696, name: "Rasika", yearPassing: "2018", batch: "2020-2023", department: "computer sciense", currentDesignation: "SoftwareEngineer", companyName: "BnyMellon", action: "k" },
  { regNo: 2015789697, name: "Rosy", yearPassing: "2018", batch: "2020-2023", department: "computer sciense", currentDesignation: "SoftwareEngineer", companyName: "BnyMellon", action: "hh" }
];
