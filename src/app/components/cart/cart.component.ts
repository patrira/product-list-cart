import { Component,EventEmitter,Input,OnInit,Output,} from '@angular/core';

import { Changes } from '../../models/changes.model';

import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  @Input() changes: Changes[] = [];
  @Output() confirmedOrder = new EventEmitter();
  constructor(private eventService: EventService) {}

  ngOnInit() {}

  CountItems() {
    let total: number = 0;
    this.changes.forEach((change) => {
      total += change.quantity;
    });
    return total;
  }

  CountTotal() {
    let total: number = 0;
    this.changes.forEach((change) => {
      total += parseInt((change.total as string).substring(1));
    });
    return total.toFixed(2);
  }

  RemoveItem(item: Changes) {
    const index = this.changes.findIndex((c) => c === item);
    this.changes.splice(index, 1);
    this.eventService.eventSubject.next(item.model.name);
  }

  Confirm() {
    this.eventService.orderSubject.next(this.changes);
    this.confirmedOrder.emit(true);
  }
}
