import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Product } from './product/product';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'product/:id',
        component: Product
    },
];
