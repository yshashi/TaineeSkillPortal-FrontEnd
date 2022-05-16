import { HttpBackend,HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
// import { Constants } from 'src/app/constants/constants';
import { environment } from 'src/environments/environment';
import { Skill } from '../models/skill-model';


const headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class SkillService {
  constructor(private httpClient: HttpClient) {}

  public getAllSkills(): Observable<any[]> {
    var skills:any;

    // headers.append('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    // skills = this.httpClient
    //   .get(Constants.baseUrl + Constants.Api.AllSkills, {
    //     headers,
    //     withCredentials: true,
    //     responseType: 'json',
    //   })
    //   .pipe(
    //     // catchError((error) => {
    //     //   // throw ErrorTexts.baseError + ErrorTexts.SpecificError.Connection;
    //     // })
    //   );
    return skills;
  }


  // tslint:disable-next-line:typedef
  public mapSkills(skillData: Array<any>) {
    console.log(skillData);
    return skillData.map((Item) => {
      return {
        skillTitle: Item.skillTitle,
       
        Skill_ID: Item.Skill_ID
      };
    });
  }
  
  // getskill(Skill_ID: number) {
  //   throw new Error('Method not implemented.');
  // }
  // http: any;

  

        // constructor(private http:HttpClient) { }
      // postSkillData(data:any){
      //   return this.http.get<Skill[]>(environment.apiURL+'/Skill');

      // }
      //   getSkillData(){
      //    return this.http.get<Skill[]>(environment.apiURL+'/Skill');
      //   }
 }
