import { Component, Input, OnInit } from '@angular/core';
import { Question, questions } from './questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @Input() answers!: string;

  ngOnInit(): void {
    this.calculateAllAnswersReadingTime(questions);
  }

  private calculateAllAnswersReadingTime = (questions: Question[]): any => {
    const answers = this.getAnswers(questions);
    console.log(this.getAllAnswersReadingTime(answers));
  };

  private getAllAnswersReadingTime = (answers: string[] | null) => {
    return answers?.map(this.calculateReadingTime);
  };

  private calculateReadingTime = (answer: string): number => {
    const wordsPerMinute = 225;
    const wordsInAnswer = answer.trim().split(/\s+/).length;
    const estimatedReadingTime = Math.ceil(wordsInAnswer / wordsPerMinute);
    return estimatedReadingTime;
  };

  private getAnswers = (questions: Question[]): string[] | null =>
    questions.map((question) => question.answer);
}
