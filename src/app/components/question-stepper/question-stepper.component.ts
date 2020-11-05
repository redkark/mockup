import { Component, OnInit } from '@angular/core';
import {CdkStepper} from '@angular/cdk/stepper';

@Component({
  selector: 'app-question-stepper',
  templateUrl: './question-stepper.component.html',
  styleUrls: ['./question-stepper.component.css'],
  // This custom stepper provides itself as CdkStepper so that it can be recognized
  // by other components.
  providers: [{ provide: CdkStepper, useExisting: QuestionStepperComponent }]
})
export class QuestionStepperComponent extends CdkStepper implements OnInit {

  onClick(index: number): void {
    this.selectedIndex = index;
  }

  ngOnInit(): void {
  }

}
