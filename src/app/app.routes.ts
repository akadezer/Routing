import { Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { resolveUserName, UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { routes as userRoutes } from './users/users.route';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
    resolve: {
        userName: resolveUserName
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
