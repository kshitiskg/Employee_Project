import { Component , EventEmitter, Input, Output } from '@angular/core';
import { Column } from 'src/app/core/module/table';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent {

  @Input() columnData: Column [] = [];
  @Input() gridData: any [] = [];
  @Input () isAction: boolean = false;

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  edit(item:any) {
    this.onEdit.emit(item)
  }
  delete(item:any) {
    this.onDelete.emit(item)
  }
}
