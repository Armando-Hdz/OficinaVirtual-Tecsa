import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Response } from 'src/app/interfaces/response/response';

@Component({
  selector: 'app-edt',
  templateUrl: './edt.component.html',
  styleUrls: ['./edt.component.scss']
})
export class EdtComponent implements OnInit {

  public lstTask: any[] = [];

  constructor(private tskService: TaskService) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask() {
    this.tskService.getTask().subscribe(
      Response => {
        this.lstTask = Response.data;
      }
    );
  }
}
