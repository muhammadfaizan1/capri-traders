import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
	title: string;
	mode: string;
	product = { quantity: '', rate: '', description: '', id: '' };
	index: any;
	constructor(
		public dialogRef: MatDialogRef<EditComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit(): void {
		if (this.data && this.data.product) {
			this.product = this.data.product;
			this.index = this.data.index;
			this.title = 'Update Quantity or Rate';
			this.mode = 'Update';
		} else {
			this.title = 'Add product';
			this.mode = 'Add';
		}
	}

	onSubmit() {
		this.dialogRef.close({
			product: this.product,
			index: this.index,
			isEdit: false,
		});
	}
}
