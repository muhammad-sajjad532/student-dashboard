import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Student } from '../models/student';
import { 
  GetStudents, 
  AddStudent, 
  UpdateStudent, 
  DeleteStudent, 
  SelectStudent, 
  ClearSelectedStudent 
} from './student.actions';

export interface StudentStateModel {
  students: Student[];
  selectedStudent: Student | null;
  loading: boolean;
  error: string | null;
}

@State<StudentStateModel>({
  name: 'students',
  defaults: {
    students: [],
    selectedStudent: null,
    loading: false,
    error: null
  }
})
@Injectable()
export class StudentState {
  
  // SELECTORS (Read data)
  @Selector()
  static getStudents(state: StudentStateModel) {
    return state.students;
  }

  @Selector()
  static getSelectedStudent(state: StudentStateModel) {
    return state.selectedStudent;
  }

  @Selector()
  static isLoading(state: StudentStateModel) {
    return state.loading;
  }

  // ACTION HANDLERS (Modify data)
  
  @Action(GetStudents)
  getStudents(ctx: StateContext<StudentStateModel>) {
    // For now, let's use mock data
    // Later we'll replace this with API call
    const mockStudents: Student[] = [
      {
        id: '1',
        name: 'Ali Ahmed',
        email: 'ali@example.com',
        phone: '0300-1234567',
        course: 'Computer Science',
        enrollmentDate: new Date('2024-01-15'),
        grade: 'A'
      },
      {
        id: '2',
        name: 'Sara Khan',
        email: 'sara@example.com',
        phone: '0301-7654321',
        course: 'Software Engineering',
        enrollmentDate: new Date('2024-02-20'),
        grade: 'B+'
      }
    ];

    ctx.patchState({
      students: mockStudents,
      loading: false
    });
  }

  @Action(AddStudent)
  addStudent(ctx: StateContext<StudentStateModel>, action: AddStudent) {
    const state = ctx.getState();
    
    ctx.patchState({
      students: [...state.students, action.student]
    });
  }

  @Action(UpdateStudent)
  updateStudent(ctx: StateContext<StudentStateModel>, action: UpdateStudent) {
    const state = ctx.getState();
    
    const updatedStudents = state.students.map(student => 
      student.id === action.id ? action.student : student
    );

    ctx.patchState({
      students: updatedStudents
    });
  }

  @Action(DeleteStudent)
  deleteStudent(ctx: StateContext<StudentStateModel>, action: DeleteStudent) {
    const state = ctx.getState();
    
    const filteredStudents = state.students.filter(
      student => student.id !== action.id
    );

    ctx.patchState({
      students: filteredStudents
    });
  }

  @Action(SelectStudent)
  selectStudent(ctx: StateContext<StudentStateModel>, action: SelectStudent) {
    const state = ctx.getState();
    
    const student = state.students.find(s => s.id === action.id);

    ctx.patchState({
      selectedStudent: student || null
    });
  }

  @Action(ClearSelectedStudent)
  clearSelectedStudent(ctx: StateContext<StudentStateModel>) {
    ctx.patchState({
      selectedStudent: null
    });
  }
}