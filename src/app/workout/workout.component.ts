import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  workouts = [{
    userId : 'chris',
    id: 'aj4s83snxjk5',
    date: new Date(),
    exercises: [{
      name: 'squat',
      weight: '45',
      reps: '5',
      sets: [{
        complete: true
      }]
    },
    {
      name: 'squat',
      weight: '65',
      reps: '5',
      sets: [{
        complete: true
      }]
    },
    {
      name: 'squat',
      weight: '85',
      reps: '5',
      sets: [{
        complete: true
      }]
    },
    {
      name: 'squat',
      weight: '105',
      reps: '5',
      sets: [{
        complete: true
      }]
    },
    {
      name: 'squat',
      weight: '125',
      reps: '5',
      sets: [{
        complete: true
      }]
    },
    {
      name: 'squat',
      weight: '135',
      reps: '5',
      sets: [{
        complete: true
      },
      {
        complete: true
      },
      {
        complete: false
      },
      {
        complete: false
      }]
    },
    {
      name: 'overhead press',
      weight: '45',
      reps: '5',
      sets: [{
        complete: true
      }]
    },
    {
      name: 'overhead press',
      weight: '65',
      reps: '5',
      sets: [{
        complete: true
      }]
    },
    {
      name: 'overhead press',
      weight: '75',
      reps: '5',
      sets: [{
        complete: true
      },
      {
        complete: true
      },
      {
        complete: true
      }]
    }]
  }];

  isSelected = true;
  selectedId = 'aj4s83snxjk5';
  selected = this.workouts.find(element => element.id === 'aj4s83snxjk5');

  constructor() { }

  ngOnInit(): void {
    console.log(this.selected);
  }

}
