import { ConfiguracionService } from '../servicios/configuracion.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cita } from '../modelo/cita';
import { CitaService } from '../servicios/cita.service';
import {IonIcon, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';


@Component({
  selector: 'app-lista-de-citas',
  templateUrl: './lista-de-citas.component.html',
  styleUrls: ['./lista-de-citas.component.scss'],
  standalone: true,
  imports: [IonItem,IonLabel, IonList, IonIcon,CommonModule]
})
export class ListaDeCitasComponent  implements OnInit {

  @Input() citas:Cita[] = []
  @Output() onChange = new EventEmitter<Cita>()

  constructor(private configuracionService: ConfiguracionService,
    private citaService: CitaService) { 
      addIcons({
        trash
      })
    }

  ngOnInit() {
    console.log("ListaDeCitasComponent::ngOnInit()")
  }

  ionViewWillEnter() {
    console.log("ListaDeCitasComponent::ionViewWillEnter()")
  }

  eliminarCita(cita: Cita) {
    if (this.configuracionService.eliminarRegistros()) {
      this.citaService.deleteCita(cita);
      this.citas = this.citaService.getCitas();
    }
  }
}
