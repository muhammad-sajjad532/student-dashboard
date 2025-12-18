import { Student } from '../models/student';

export class GetStudents {
  static readonly type = '[Student] Get Students';
}

export class AddStudent {
  static readonly type = '[Student] Add Student';
  constructor(public student: Student) {}
}

export class UpdateStudent {
  static readonly type = '[Student] Update Student';
  constructor(public id: string, public student: Student) {}
}

export class DeleteStudent {
  static readonly type = '[Student] Delete Student';
  constructor(public id: string) {}
}

export class SelectStudent {
  static readonly type = '[Student] Select Student';
  constructor(public id: string) {}
}

export class ClearSelectedStudent {
  static readonly type = '[Student] Clear Selected Student';
}