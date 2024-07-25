/*import { UserInteface } from '../types/user.interface';
import { UsersService } from './users.service';
import { TestBed } from '@angular/core/testing';

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
    });

    usersService = TestBed.inject(UsersService);
  });

  it('creates a service', () => {
    expect(usersService).toBeTruthy();
  });

  describe('addUser', () => {
    it('should add a user', () => {
      const user: UserInteface = {
        id: '3',
        name: 'foo',
      };
      usersService.addUser(user);
      expect(usersService.users).toEqual([{ id: '3', name: 'foo' }]);
    });
  });

  describe('removeUser', () => {
    it('should remove a user', () => {
      usersService.users = [{ id: '3', name: 'foo' }];
      usersService.removeUser('3');
      expect(usersService.users).toEqual([]);
    });
  });
});*/
import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';

describe('userService', () => {
  // property to reference service
  let userService: UsersService;
  // beforeEach block is excuted on each test
  beforeEach(() => {
    // TestBed will create module for service
    TestBed.configureTestingModule({
      providers: [UsersService],
    });
    // to get access to our service module
    userService = TestBed.inject(UsersService);
  });
  it('creates a service', () => {
    expect(userService).toBeTruthy();
  });
});