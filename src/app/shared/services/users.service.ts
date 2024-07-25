// import { UtilsService } from './utils.service';
// import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { UserInteface } from '../types/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UsersService {
  // utilsService = inject(UtilsService);
  // users: UserInteface[] = [];
  users$ = new BehaviorSubject<UserInteface[]>([]); // they might are almost the same but users$ is stream of data

  addUser(user: UserInteface): void {
    this.users$.next([...this.users$.getValue(), user]); // adding data to the stream
  }

  removeUser(userId: string): void {
    const updatedUsers = this.users$
      .getValue()
      .filter((user) => userId !== user.id);
    this.users$.next(updatedUsers); // updating stream
  }

  // getUsername(): string[] {
  //   return this.utilsService.pluck(this.users, 'name');
  // }
}
