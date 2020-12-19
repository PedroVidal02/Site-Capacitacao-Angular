import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

import { Student } from './student/student.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students: Student[] = [
    {name: 'Luke', isJedi: true, temple: 'Coruscant' },
    {name: 'Leia', isJedi: false, temple: 'Coruscant' },
    {name: 'Han Solo', isJedi: false, temple: 'Coruscant' }
  ]

  addStudent(newstudent: Student) {
    this.students.push(newstudent)
    console.log(this.students)
  }
}
