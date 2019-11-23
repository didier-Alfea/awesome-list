import { Injectable } from '@angular/core';
import { Toastr } from 'src/app/shared/models/toastr';
import { take } from 'rxjs/operators';
import { timer, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  private toastr: BehaviorSubject<any> = new BehaviorSubject({
   category: 'success',
   message: 'Clic moi dessus, et je me fermerai !'
  });
  public readonly toastr$: Observable<Toastr|null> = this.toastr.asObservable();

  constructor() { }

  public showToastr(toastr: Toastr): void {
    timer(0, 3000).pipe(take(2)).subscribe(i => {
      if (i===0) {
        this.toastr.next(toastr);
      } else {
        this.toastr.next(null);
      }
    });
  }

  public closeToastr() {
   this.toastr.next(null);
  }
}
