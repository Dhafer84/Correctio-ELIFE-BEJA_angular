import { Component, OnInit } from '@angular/core';
import { Stage } from '../model/stage';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public title: string ;
  public list:  Stage[];
  stage: Stage;
  keyword = '';
  constructor(private stageService:StageService) { }

  ngOnInit(): void {
    this.list=this.list;
    this.title = 'Liste des Stages'
    this.stageService.getAll().subscribe(
      (response:Stage[])=>{this.list=response}
    )
  }
  onSearch() {
  this.list=this.list.filter(stage => stage.description.includes(this.keyword));
  }

  incrementInterest(stage: Stage) {
    //stage.nbrIntersse++;
    let i = this.list.indexOf(stage)
    if (i!=-1){
      this.list[i].nbrIntersse++
    }
  }

  deleteStage(stage:Stage){
    console.log(stage)
    let i = this.list.indexOf(stage)
    this.stageService.delete(stage.id).subscribe(
      ()=>{this.stageService.getAll().subscribe((response:Stage[])=>{this.list=response})
      }

    )
    //this.productService.list.splice(i,1)
  }
}
