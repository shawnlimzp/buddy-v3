import { Injectable } from '@angular/core';
import { Workout } from '../model/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {
  getChest(): any {
    throw new Error('Method not implemented.');
  }
  getBack(): any {
    throw new Error('Method not implemented.');
  } 

  workouts: Workout[] = [];

  constructor() { }

  getProducts(): Workout[] {
    return this.workouts;
  }


}
