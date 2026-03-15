// Import Injectable depuis Angular ce qui permet de transformer la classe en service
import { Injectable } from '@angular/core';

//Décorateur qui indique que cette classe est un service
@Injectable({
  providedIn: 'root',
   // 'root' signifie que ce service est disponible dans toute l'application
})

// Création du service nommé Store
export class Store {
  // Tableau contenant les produits de la boutique, Chaque produit a un id, un nom et un prix
  products = [
    {id: 1, name:"Chef du village", price: 32},
    {id: 2, name:"Guerrier à la moustache", price: 15},
    {id: 3, name:"Porteur de menhirs", price: 15},
    {id: 4, name:"Vendeur de poisson", price: 10},

  ];

  // Fonction qui permet de récupérer la liste des produits.
  getProducts() {
    return this.products;
  }
}
