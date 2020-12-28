import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {

  constructor(
    public prodService: ProductsService
  ) { }

  ngOnInit() { }

  previous() {
    if (this.prodService.current > 1) {
      this.prodService.get(--this.prodService.current);
    }
  }

  next() {
    if (this.prodService.current <= this.prodService.pages - 1) {
      this.prodService.get(++this.prodService.current);
    }
  }

}
