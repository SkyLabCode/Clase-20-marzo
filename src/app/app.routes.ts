import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'contacts',
                loadComponent: () =>
                    import('./contacts-list/contacts-list.component').then(m => m.ContactsListComponent)
            },
            {
                path: 'todo',
                loadComponent: () =>
                    import('./todo-list/todo-list.component').then(m => m.TodoListComponent)
            }
        ]

    }
];
