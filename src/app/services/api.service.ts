import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseApiUrl:string = "https://localhost:7231/api"
  constructor(private http : HttpClient) { }

  getSkillCatalogue(){
    return this.http.get<any>(`${this.baseApiUrl}/SkillsCatalogue`)
  }
  addSkillCatalogue(data : any){
    return this.http.post<any>(`${this.baseApiUrl}/SkillsCatalogue`,data)
  }
  updateSkillCatalogue(data : any){
    return this.http.put<any>(`${this.baseApiUrl}/SkillsCatalogue/update-catalogue`,data)
  }
  deleteSkillCatalogue(id : number){
    return this.http.delete<any>(`${this.baseApiUrl}/SkillsCatalogue/${id}`)
  }



  getAllTrainee(){
    return this.http.get<any>(`${this.baseApiUrl}/Trainee`)
  }
  getTraineeById(id:number){
    return this.http.get<any>(`${this.baseApiUrl}/Trainee/${id}`)
  }
  deleteTrainee(id:number){
    return this.http.delete<any>(`${this.baseApiUrl}/Trainee/${id}`)
  }
  addTrainee(data:any){
    return this.http.post<any>(`${this.baseApiUrl}/Trainee/add-trainee`,data)
  }
  updateTrainee(data:any){
    return this.http.put<any>(`${this.baseApiUrl}/Trainee/update`,data)
  }
}
