import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ConvertComponent } from './pages/convert/convert.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "convert", component: ConvertComponent },
    { path: "", redirectTo: "home", pathMatch: "full" }
];
