import { Component, OnInit, ViewChild } from '@angular/core';
import { ContainerService } from '../container.service';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Container } from '../model/container';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.css']
})
export class ContainerListComponent implements OnInit {

  displayedColumns: string[] = ['containerId', 'descricao', 'capacidade', 'comprimento', 'largura',
  'tipo', 'dtCadastro', 'dtAtualizacao', 'dtVencimento', 'editColumn'];

  public dataSource: any;
 
  @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private containerService: ContainerService,
    public router: Router,
    private dialog: MatDialog,
    private datePipe: DatePipe,
    public spinner: NgxSpinnerService) { } 

  ngOnInit() {
    this.listAll();  
  }

  callUpdate(id: number) {
    this.router.navigate(['../container-edit/'+id]);
  }

  deleteConfirmation(id: number) {
    let dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-dialog',
      data: 'Confirmar exclusão do registro?',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(isConfirm => {
      if(isConfirm)
        this.removerContainer(id);
    })
  }

  listAll() {
    this.spinner.show();
    console.log("Felipe entrou")
    this.containerService.listAll().subscribe(sucesso => {
      if (sucesso != null) {
        this.atualizaTabela(sucesso);
        this.spinner.hide();
      }
    }, error => {
      console.log(error);
      this.spinner.hide();
    });
  } 

  atualizaTabela(containers: any) {
    this.dataSource = new MatTableDataSource<Container>(containers);
    this.dataSource.paginator = this.paginatorCustom;
    this.dataSource.sort = this.sort;
  }

  removerContainer(id: number) {
    console.log("Passou aqui");
    this.spinner.show();
    this.containerService.delete(id).subscribe(sucesso => {
      if (sucesso != null) {
        this.listAll();
        this.spinner.hide();
      }
    }, error => {
        console.log(error);
        this.spinner.hide();
    });
  }

  callNew() {
    this.router.navigate(["../container"]);
  }
}
