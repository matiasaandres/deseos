import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { DeseosService } from "src/app/services/deseos.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor(
    public deseosServices: DeseosService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async agregarLista() {
    //this.router.navigateByUrl('tabs/tab1/agregar');

    const alert = await this.alertCtrl.create({
      header: "Nueva Lista",
      inputs: [
        {
          name: "titulo",
          type: "text",
          placeholder: "Nombre de la lista",
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("Cancelar");
          },
        },

        {
          text: "Crear",
          handler: (data) => {
            console.log(data);
            if (data.titulo.lenght === 0) {
              return;
            }
           const listaId= this.deseosServices.crearLista(data.titulo);
            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          },
        },
      ],
    });

    await alert.present();
  }
}
