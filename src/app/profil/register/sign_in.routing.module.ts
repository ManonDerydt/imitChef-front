import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Sign_inPage} from "./sign_in/sign_in.page"

const routes: Routes = [
    {
        path: '',
        component: Sign_inPage
    },
    // {
    //     path: ':id',
    //     component: Sign_inPage
    // },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SignInRoutingModule {}