import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-trainee-list',
  templateUrl: './trainee-list.component.html',
  styleUrls: ['./trainee-list.component.css']
})
export class TraineeListComponent implements OnInit {

  @Input() traineeList : any[]=[];
  @Output() sendEmployee = new EventEmitter();
  @Output() sendId = new EventEmitter();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  sendEmployeeRecord(row:any){
    this.sendEmployee.emit(row);
  }
  delete(id:any){
    this.sendId.emit(id);
  }
  openDialog(id:any) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog,{
      width:"370px",
      data:id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
  styleUrls:['./dialog.css']
})
export class DialogContentExampleDialog {
  data : any;
  constructor(@Inject(MAT_DIALOG_DATA) public id: any,private api : ApiService) {

    this.api.getTraineeById(id)
    .subscribe(res=>{
      this.data = res;
      console.log(this.data);
    })
  }
}
