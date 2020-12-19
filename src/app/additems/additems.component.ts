import { Output, EventEmitter, Component, OnInit } from '@angular/core';
import { Student } from '../student/student.model'
@Component({
  selector: 'jad-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {

  constructor() { }

  newstudent: Student = {name: 'Empty', isJedi: false, temple: 'Empty'}

  @Output() studenttopass = new EventEmitter<Student>();

  passStudent(namestudent: string){
    this.newstudent = {name: namestudent, isJedi: false, temple: 'Empty'}
    
    this.studenttopass.emit(this.newstudent)
  }

  ngOnInit(): void {
  }
}
