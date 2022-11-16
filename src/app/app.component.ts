import { Component, Input, OnInit } from '@angular/core';
import { array } from './questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
 @Input() answers!: string;
  // public answers!: string
  public time!: Number;
  public bdc = array;
  private wpm = 225;

  ngOnInit(): void {
    this.readingTime();
    console.log(this.answers);
  }

  public readingTime() {
    // const words = this.answers.trim().split(/\s+/).length;
    // this.time = Math.ceil(words / this.wpm);
  }
}
