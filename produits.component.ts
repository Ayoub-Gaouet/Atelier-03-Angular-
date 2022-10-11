import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

export class ProduitsComponent implements OnInit {

  produits : Produit[]; //un tableau de Produit
  constructor(private produitService: ProduitService ) {
    this.produits = produitService.listeProduits();
    }

}
