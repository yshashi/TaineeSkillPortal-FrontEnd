import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Skill } from 'src/shared/models/skill-model';
import { SkillService } from 'src/shared/servises/skill-service';
import { SkillFormComponent } from '../skill-form/skill-form.component';


//
@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css'],
})
export class SkillListComponent implements OnInit {
  skillName!: string;
  public userInput!: string;

  Skill!: any[];
  subscription!: Subscription;
  // dialog: any;

  constructor(
    private dialog: MatDialog,
    // private traineeService: TraineeService,
    private route: ActivatedRoute,
    private skillService: SkillService,
    private api : ApiService
  ) {}

  ngOnInit(): void {
    this.api.getSkillCatalogue()
    .subscribe(res=>{
      this.Skill = res;
      console.log(this.Skill,"Skillssss")
    })
  }

  onNewSkill(): void {
    const dialogRef = this.dialog.open(SkillFormComponent, {
      width: '400px'
    });
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('The dialog was closed');
    //   let newSkill = new Skill(result.skillCatalogueId,result.skillName);
    //   this.traineeService.addSkill(newSkill);
    // });
  }
  onEditForm(skill:any){
    this.skillName = skill.skillName;
    const dialogRef = this.dialog.open(SkillFormComponent, {
      width: '400px',
      data: { skill: skill },
    });
  }
  deleteSkill(id:number){
    this.api.deleteSkillCatalogue(id)
    .subscribe(res=>{
      alert("Skill Deleted");
      location.reload();
    })
  }
}
