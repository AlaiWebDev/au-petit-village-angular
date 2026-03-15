// On importe Component et Service Store.
import { Component } from '@angular/core';
import { Store } from '../store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

// Création de la classe du composant Home
export class Home {
    // Tableau qui va contenir les produits.
  products: any[] = [];

  // Récupération du service Store.
  constructor(private store: Store) {

    // On appelle la fonction "getProducts()" pour récupérer les produits
    this.products = this.store.getProducts();
  }
  // tri par ordre croissant et décroissant
  sortPriceAsc() {
    this.products.sort((a, b) => a.price - b.price);
  }
  sortPriceDesc() {
    this.products.sort ((a, b) => b.price - a.price);
  }

  searchProduct(event: any) {
      // Récupèration du texte 
    const value = event.target.value.toLowerCase();

    //Regarder dans les produits
    this.products = this.store.getProducts().filter(product =>
      //Garder ceux qui correspondent
      product.name.toLowerCase().includes(value)
    );
  }
}






