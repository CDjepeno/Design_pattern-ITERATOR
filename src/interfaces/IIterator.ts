import { Meal } from '../classes/Meal';
export interface IIterator {
  again(): Meal 
  next(): boolean
}