import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Changes } from '../models/changes.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventSubject = new Subject<string>();
  orderSubject = new Subject<Changes[]>();

  
}
