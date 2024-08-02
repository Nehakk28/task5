import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { Component } from '@angular/core';
import { ProductComponent } from './pages/product/product.component';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:'aboutus', component:AboutusComponent},
    {path:'contactus', component:ContactusComponent},
    {path:'product', component:ProductComponent},
    {path:'product/:id',component:SingleComponent}
];
