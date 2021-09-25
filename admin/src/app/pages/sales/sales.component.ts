import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AddProductDialogComponent } from '../products/list/add-product-dialog/add-product-dialog.component';
import { CommonService } from 'src/app/services/common.service';
import {
	ProductQuery,
	ProductsService,
} from 'src/app/services/products.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'app-sales',
	templateUrl: './sales.component.html',
	styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
	productData: any;
	queryParams: ProductQuery;

	company_heads: any = [
		{ id: 1, name: 'Capri Traders' },
		{ id: 2, name: 'Capri Traders2' },
		{ id: 3, name: 'Capri Traders3' },
	];

	products: any = [];

	pay_modes: any = [{ name: 'credit' }, { name: 'cash' }];
	pay_statuses: any = [{ name: 'pending' }, { name: 'done' }];

	sale: any = {
		company_head: '',
		bill_no: '',
		po_no: '',
		grn: '',
		party_name: '',
		pay_mode: '',
		remarks: '',
		pay_status: '',
	};

	selectedProduct: any = {
		id: '',
		quantity: '',
		rate: '',
	};

	dataSource = new MatTableDataSource([]);

	sale_items: any = [];
	pageSize = 20;
	totalProducts: number;

	displayedColumns = [
		'name',
		'brand',
		'quantity',
		'rate',
		'discount',
		'description',
		'image',
		'actions',
	];

	loaded: boolean = false;

	constructor(
		private productsService: ProductsService,
		private commonService: CommonService,
		private cdr: ChangeDetectorRef,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.productsService.getCreateProductParams().subscribe((response) => {
			this.productData = response;
		});
		this.productsService
			.getAllProducts()
			.subscribe(this.handleResponse.bind(this));
	}
	handleResponse(response: any) {
		this.products = response.products;
		this.loaded = true;
		this.cdr.detectChanges();
	}

	onSubmit() {
		console.log(this.sale);
	}

	addProduct() {
		const dialogRef = this.dialog.open(AddProductDialogComponent, {
			data: { paramsData: this.productData },
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}
		});
	}

	AddProductToSaleItems() {
		const product = this.products.find(
			(product: any) => product.id == this.selectedProduct.id
		);

		product.rate = this.selectedProduct.rate;
		product.quantity = this.selectedProduct.quantity;

		this.sale_items.push(product);
		// Refreshing Data Source
		this.dataSource.data = this.sale_items;
		this.cdr.detectChanges();
		this.loaded = true;
	}
}
