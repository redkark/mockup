import { Component, OnInit } from '@angular/core';

import { mockTestQuestions } from '../../../../mockdata/mocktests';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  mockTestQuestions = mockTestQuestions;
  
  constructor() { }

  ngOnInit(): void {
  }

}
