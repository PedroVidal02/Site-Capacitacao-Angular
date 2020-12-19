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
  jediCheck: boolean

  @Output() studenttopass = new EventEmitter<Student>();

  passStudent(namestudent: string, jediCheck: boolean){
    this.newstudent = {name: namestudent, isJedi: jediCheck, temple: 'None'}
    
    this.studenttopass.emit(this.newstudent)
  }

  clearinput(input1: HTMLTextAreaElement) {
    input1.value = ''
    this.jediCheck = false
  }

  ngOnInit(): void {
  }
}
