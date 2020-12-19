import { Output, EventEmitter, Component, OnInit, Input } from '@angular/core';

import {Student} from './student.model'
@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student

  @Output() studenttodelete = new EventEmitter<string>()

  deleteName: string

  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    console.log(`Student: ${this.student.name}`)
  }

  deleteStudent(deleteName: string) {
    this.studenttodelete.emit(deleteName)
  }

}
