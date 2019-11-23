import { Task } from './task';

export class Workday {
  readonly id: string; // identifiant de la journee de travail
  dueDate: number;     // date a laquelle est prevue la journee de travail
  notes?: string;      // facultatif : notes eventuelles prises par l'utilisateur
  tasks: Task[];       // la liste des taches a faire
  userId: string;      // identifiant de l'utilisateur

  constructor(options: {
    id?: string,
    dueDate?: number,
    notes?: string,
    tasks?: Task[],
    userId: string
   }){
    this.id = options.id || null;
    this.dueDate = options.dueDate || 0;
    this.notes = options.notes || '';
    this.tasks = [new Task()];
    this.userId = options.userId;
 }
}
