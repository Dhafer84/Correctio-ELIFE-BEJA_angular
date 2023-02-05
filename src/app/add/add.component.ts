import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from '../model/stage';
import { StageService } from '../services/stage.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  stage:Stage;
  action:string;

  constructor(private stageService:StageService, private route:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    let id=this.activatedRoute.snapshot.params['id'];
    this.stage = new Stage()
    this.action="add"
    if(id!=null){
      this.action="update"
      this.stageService.search(id).subscribe(
        (response:Stage)=>{this.stage=response}
      )
    }
  }
  saveStage(){
     if (this.action=="add"){
     this.stageService.addStage(this.stage).subscribe(
       ()=>{this.route.navigate(['/list']);}
     )
   }else{
     this.stageService.update(this.stage).subscribe(
       ()=>{this.route.navigate(['/list']);})
     }
 }

}
