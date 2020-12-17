import { Injectable } from "@angular/core";
import { Lista } from "../models/lista.models";

@Injectable({
  providedIn: "root",
})
export class DeseosService {
  listas: Lista[] = [];
 

  constructor() {
    this.cargarStorage();
  }

  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  obtenerLista(id: string | number){


id = Number(id);

return this.listas.find(listaData => {
  return listaData.id === id;
});


  }

  //Guarda la informacion de las nuevas listas  en el local storaga del navegador
  guardarStorage() {
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  //trae la  informacion de las listas nuevas guardadas en el local storage
  cargarStorage() {
    if (localStorage.getItem("data")) {
      this.listas = JSON.parse(localStorage.getItem("data"));
    } else {
      this.listas = [];
    }
  }
}
