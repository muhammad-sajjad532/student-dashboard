import { Routes } from '@angular/router';
import { Dashboard } from './components/DashboardComponent/dashboard/dashboard';
import { StudentList } from './components/StudentListComponent/student-list/student-list';
import { StudentForm } from './components/StudentFormComponent/student-form/student-form';
import { StudentDetails } from './components/StudentDetailComponent/student-details/student-details';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },

    {
        path: 'dashboard',
        component: Dashboard
    },

    {
        path: 'students',
        component: StudentList
    },

    {
        path: 'students/add',
        component: StudentForm
    },

    {
        path: 'students/edit/:id',
        component: StudentForm
    },

    {
        path: 'students/:id',
        component: StudentDetails
    },

    {
        path: '**',
        redirectTo: 'dashboard'
    }

];
