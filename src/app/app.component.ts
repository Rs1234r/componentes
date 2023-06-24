import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { Componente } from './interface.ts/interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes!: Observable<Componente[]>;

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
  constructor(private dataService: DataService) { 

  }
  initializeApp() {
    this.componentes = this.dataService.getMenuOpts();
  }  

}