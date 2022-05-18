import { TraineeListComponent } from './../trainee-list/trainee-list.component';
import { ApiService } from './../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-trainee-form',
  templateUrl: './trainee-form.component.html',
  styleUrls: ['./trainee-form.component.css']
})

export class TraineeFormComponent implements OnInit {

  ratings = [{
    value:1,},{value:2,},{value:3,
  }];

  isUpdate : boolean= false;
  //
  skills=<any[]>([]);
  allTrainees:any = [];
  @ViewChild("list") comps !: TraineeListComponent;
  // router: any;
  newTraineeForm!:FormGroup;

  onSubmitForm(){
    console.log(this.newTraineeForm.value);
    this.newTraineeForm.controls['id'].setValue(0);

    this.api.addTrainee(this.newTraineeForm.value)
    .subscribe(res=>{
      console.log(res);
      this.router.navigate(['/admin']);
    },err=>{
      alert("Error while adding!")
    })

  }

  //
   onAddSkill():void{
    (<FormArray>this.newTraineeForm.get('skills')).push(this.addSkillFormGroup());
  }

  //
  onDeletSkill(skilsGroupIndex:number): void{

    (<FormArray>this.newTraineeForm.get('skills')).removeAt(skilsGroupIndex);
  }

  //
  getControls() {

    return (this.newTraineeForm.get('skills') as FormArray).controls;
  }
  get skillForm(): FormArray {
    return this.newTraineeForm.get('skills') as FormArray;
 }

  //
  constructor(
    // public TraineeService:AzubiService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private api : ApiService
    // private azubiSkillForm:AzubiSkillComponent,
    ) {


  }

  // trainee form variable
  ngOnInit(): void {
    this.newTraineeForm = this.fb.group({
      id:[''],
      firstName: [null, Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      apprenticeship: ['', Validators.required],
      deptName: ['', Validators.required],
      role: ['', Validators.required],
      startDate:['', Validators.required],
      endDate:['', Validators.required],
      // skillsform
      skills:this.fb.array([
        this.addSkillFormGroup()
      ])

    })
    // this.traineeService.getSkills();
    this.api.getSkillCatalogue()
    .subscribe(res=>{
      this.skills = res;
      console.log(this.skills,"Skills")
    });
    this.api.getAllTrainee()
    .subscribe(res=>{
      this.allTrainees = res;
      console.log(res,"All Trainees");
    })

  }

  // Skill variable
  addSkillFormGroup():FormGroup {
    return this.fb.group({
      skillId:[0],
       skillCatId:['' ,Validators.required],
       teamName:['',Validators.required],
       from:['',Validators.required],
       to:['',Validators.required],
       rating:['',Validators.required],
       comments:['',Validators.required],
       traineeModelId:[0]
     })
  }


  onEdit(event:any){
    this.skillForm.clear();
    // this.newTraineeForm.setValue({
    //   firstName: event.firstName,
    //   lastName: event.lastName,
    //   email: event.email,
    //   apprenticeship: event.apprenticeship,
    //   deptName: event.deptName,
    //   role: event.role,
    //   startDate:event.startDate,
    //   endDate:event.endDate,

    // })
    this.isUpdate = true
    this.newTraineeForm.controls['id'].setValue(event.id);
    this.newTraineeForm.controls['firstName'].setValue(event.firstName);
    this.newTraineeForm.controls['lastName'].setValue(event.lastName);
    this.newTraineeForm.controls['email'].setValue(event.email);
    this.newTraineeForm.controls['apprenticeship'].setValue(event.apprenticeship);
    this.newTraineeForm.controls['deptName'].setValue(event.deptName);
    this.newTraineeForm.controls['role'].setValue(event.role);
    this.newTraineeForm.controls['startDate'].setValue(event.startDate);
    this.newTraineeForm.controls['endDate'].setValue(event.endDate);

    event.skills.map((item:any, index:any) => {
      const tmpDict:any = {};
    tmpDict['skillId'] = new FormControl(item.skillId);
    tmpDict['skillCatId'] = new FormControl(item.skillCatId);
    tmpDict['teamName'] = new FormControl(item.teamName);
    tmpDict['from'] = new FormControl(item.from);
    tmpDict['to'] = new FormControl(item.to);
    tmpDict['rating'] = new FormControl(item.rating);
    tmpDict['comments'] = new FormControl(item.comments);
    tmpDict['traineeModelId'] = new FormControl(item.traineeModelId);


   this.skillForm.push(new FormGroup(tmpDict));
    });

  }
  items!: FormArray;
  updateTrainee(){
    this.api.updateTrainee(this.newTraineeForm.value)
    .subscribe(res=>{

      console.log(res);
      alert("Updated");
      this.isUpdate = false;
      this.ngOnInit();
    })
  }

  delete(id:any){
    this.api.deleteTrainee(id)
    .subscribe(res=>{
      alert("Deleted SuccessFully");
      this.ngOnInit();
    })
  }




}
