import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  public coloregenerale: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }
}
