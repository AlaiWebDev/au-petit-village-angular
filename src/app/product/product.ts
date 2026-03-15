import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  productId: string|null=null;
  
  constructor(private route: ActivatedRoute) {
    this.productId = this.route.snapshot.paramMap.get("Id");
    console.log("ID du produit:",this.productId);
  }
}
