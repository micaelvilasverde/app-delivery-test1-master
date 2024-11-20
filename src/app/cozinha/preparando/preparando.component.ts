import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../models/pedido.model';


@Component({
  selector: 'app-preparando',
  templateUrl: './preparando.component.html',
  styleUrls: ['./preparando.component.css']
})
export class PreparandoComponent implements OnInit {
  location: any;
  router: any;

  voltarPaginaAnterior(): void {
    console.log('Voltando à página anterior');
    this.location.back(); // Utilize o Location para voltar
  }
  
  voltarParaMenu(): void {
    console.log('Voltando ao menu principal');
    this.router.navigate(['/menu']); // Redireciona para o menu
  }
  
  finalizados(): void {
    console.log('Finalizando pedidos');
    // Lógica para finalizar pedidos
  }

  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.carregarPedidos();
  }

  carregarPedidos(): void {
    this.pedidoService.listarPedidos().subscribe(
      (response: Pedido[]) => {
        // Filtra os pedidos com status "PREPARANDO"
        this.pedidos = response.filter(pedido => pedido.status === 'PREPARANDO');
      },
      error => {
        console.error('Erro ao carregar pedidos:', error);
      }
    );
  }
}
