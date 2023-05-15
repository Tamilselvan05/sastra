import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-paststud',
  templateUrl: './paststud.component.html',
  styleUrls: ['./paststud.component.css']
})
export class PaststudComponent implements AfterViewInit {

  constructor(public api : ApiService) { }
  displayedColumns: string[] = ['regNo', 'name', 'yearPassing','batch','department','currentDesignation','companyName', 'Action'];
  dataSource = new MatTableDataSource<studentElement>(ELEMENT_DATA);
  // headers = ['Reg No.', 'Student name', 'year of passing', 'Batch', 'Department', 'Current Desingnation', 'Company name', 'Action/Reject']

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  delete(elm:any) {
    console.log('jon')
    this.dataSource.data = this.dataSource.data.filter(i => i !== elm)
  }
  ngOnInit(): void {
    
    this.api.paststudgetRegister().subscribe((data:any)=>{
     console.log(data,'ggg')
    })

    
      
  

  }
  onAdd(index : any){
    // alert("hhh")
    // console.log(this.dataSource.data,'kkkkkkkkkkkkkk')
    alert("saved successfully")
    for (let i = 0; i < this.dataSource.data.length; i++) {
      // console.log([this.dataSource.data[i]]);
      // if (this.dataSource.data[i].result == "pass") {
      //   console.log(this.dataSource.data[i].result)
      // }
      console.log(this.dataSource.data)
    }
  }
  onRemove(item: any) {
    this.dataSource.data.splice(item, 1);
    console.log("ggggggggggg")
  }

}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
//   // regNo:number;
// }


export interface studentElement {
  regNo: number;
  name: string;
  yearPassing: string;
  batch: string;
  department:string;
currentDesignation:string;
companyName:string
  action: string;
  // regNo:number;
}

// { id: '', regNo: "2015789690", name: "Shree", yearPassing: "2018", Batch: "2020-2023",
// department: "BCA", currentDesignation: "Software Engineer", companyName: "Bny Mellon" },
// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
//   { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
//   { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
//   { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
//   { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
//   { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
//   { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
//   { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
//   { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
//   { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
//   { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
// ];


const ELEMENT_DATA: studentElement[] = [
  { regNo: 2015789694, name: "Shreekalaivathana", yearPassing: "2018",batch:"2020-2023", department:"computer sciense",currentDesignation:"SoftwareEngineer",companyName:"BnyMellon",action:"" },
  { regNo: 2015789695, name: "shree", yearPassing: "2018",batch:"2020-2023", department:"computer sciense" ,currentDesignation:"SoftwareEngineer",companyName:"BnyMellon",action: "gggg" ,},
  { regNo: 2015789696, name: "Harini", yearPassing: "2018",batch:"2020-2023", department:"computer sciense" ,currentDesignation:"SoftwareEngineer",companyName:"BnyMellon",action: "k" },
  { regNo: 2015789696, name: "Rashika", yearPassing: "2018",batch:"2020-2023", department:"computer sciense" ,currentDesignation:"SoftwareEngineer",companyName:"BnyMellon",action: "k" },
  { regNo: 2015789696, name: "Riya", yearPassing: "2018",batch:"2020-2023", department:"computer sciense" ,currentDesignation:"SoftwareEngineer",companyName:"BnyMellon",action: "k" },

  // { regNo: 2015789697, name: "Riyashre", yearPassing: "2018",batch:"2020-2023", department:"computer sciense" ,currentDesignation:"SoftwareEngineer",companyName:"BnyMellon",action: "hh" }




];
