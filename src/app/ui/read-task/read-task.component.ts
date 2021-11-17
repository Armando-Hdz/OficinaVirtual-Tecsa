import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Response } from 'src/app/interfaces/response/response';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-task',
  templateUrl: './read-task.component.html',
  styleUrls: ['./read-task.component.scss']
})
export class ReadTaskComponent implements OnInit {

  public id: number;
  public lstTaskData: any;

  constructor(
    private aRoute: ActivatedRoute,
    private tskService: TaskService
  ) {
    this.aRoute.snapshot.paramMap.get('id');
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getTaskSpecific();
  }

  getTaskSpecific() {
    this.tskService.getTaskSpecific(this.id).subscribe(
      Response => {
        this.lstTaskData = Response.data;
      }
    );
  }

}
