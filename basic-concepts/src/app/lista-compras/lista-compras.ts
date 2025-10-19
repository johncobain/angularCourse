import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './item-lista';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss',
})
export class ListaCompras {
  item: string = '';
  lista: ItemLista[] = [];

  addItem() {
    const newItem = new ItemLista();
    newItem.name = this.item;
    newItem.id = this.lista.length + 1;

    this.lista.push(newItem);

    this.item = '';
  }

  buyItem(item: ItemLista) {
    item.brought = !item.brought;
  }

  clearList() {
    this.lista = [];
  }
}
