import { ApiService } from 'src/app/services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {

  skillName!:string;
  isUpdate:boolean=false;
  skillId !: number;
  constructor(
    public dialogRef: MatDialogRef<SkillFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private api : ApiService ) {
      console.log(data,"Skill data");
      if(data){
        this.isUpdate = true;
      this.skillId = data.skill.skillCatalogueId
      this.skillName = data.skill.skillName
      }
    }

    closeDialog(): void {
    this.dialogRef.close();

  }
  ngOnInit(): void {
  }
  addSkill(){
    let data = {
      "skillName": this.skillName
    }
    this.api.addSkillCatalogue(data).subscribe(res=>{
      alert("Skill Added");
      location.reload();
    })
  }
  updateSkill(){
    let data = {
      "skillCatalogueId": this.skillId,
      "skillName": this.skillName
    }
    this.api.updateSkillCatalogue(data).subscribe(res=>{
      alert("Skill Updated");
      location.reload();
    })
  }
}
