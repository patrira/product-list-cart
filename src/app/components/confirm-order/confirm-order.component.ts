import {
  Component,
  EventEmitter,
  Input,
  
  OnInit,
  Output,
  
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Changes } from '../../models/changes.model';

import { CommonModule } from '@angular/common';
import { FormatPrice } from '../../priceFormat';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrl: './confirm-order.component.css',
})
export class ConfirmOrderComponent implements OnInit {
  subscription = new Subscription();
  @Input() items: Changes[] = [];
  @Output() backEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  CountTotal() {
    let result: number = 0;
    this.items.forEach((item) => {
      let price = item.total.toString().substring(1);
      result += parseInt(price as string);
    });

    return FormatPrice(result);
  }

  Done() {
    this.backEvent.emit(false);
  }
}
