import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.models';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

lista: Lista;
nombreItem:'';


  constructor( private deseosSevcices: DeseosService,
              private router: ActivatedRoute) { 


                const listaId = this.router.snapshot.paramMap.get('listaId');
                this.lista = this.deseosSevcices.obtenerLista(listaId);
              }

  ngOnInit() {
  }

}
