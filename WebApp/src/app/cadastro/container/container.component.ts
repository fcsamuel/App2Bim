import { Component, OnInit } from '@angular/core';
import { Container } from './model/container';
import { ContainerService } from './container.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  public containerModel:Container;
  public edit: boolean;

  constructor(private containerService: ContainerService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.containerModel = new Container();

    this.activatedRoute.params.subscribe(
      param => {
        if(param. id != undefined) {
          console.log(param);
          this.getById(param.id);
          this.edit = true;
        }
      }
    )
  }

  salvar() {
    if (!this.edit) {
      this.spinner.show();
      console.log("Salvar container");
      console.log(this.containerModel);
      this.containerService.save(this.containerModel).subscribe(sucesso => {
        if(sucesso != null)
          //this.spinner.hide();
          console.log("Sucesso!");
          this.router.navigate(["../container-list"]);
      },
      error => {
        //this.spinner.hide();
        console.log("Erro! >:(");
      });
    } else {
      this.atualizar();
    }
  }

  atualizar() {
    this.containerService.update(this.containerModel).subscribe(sucesso => {
      if(sucesso != null)
        console.log("Sucesso!");
        this.router.navigate(["../container-list"]);
    },
    error => {
      console.log("Erro! >:(");
    });
  }

  getById(id: number) {
    this.containerService.getById(id).subscribe(sucesso => {
      if(sucesso)
        this.containerModel = sucesso;
    }, error => {
      console.log(error);
    });
  } 

  voltar() {
    this.router.navigate(["../container-list"]);
  }
}
