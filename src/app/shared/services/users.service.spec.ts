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
import { UserInteface } from '../types/user.interface';
import { UtilsService } from './utils.service';

describe('userService', () => {
  // property to reference service
  let userService: UsersService;
  let utilsServiceMock = {
    pluck: jest.fn(),
  };
  // beforeEach block is excuted on each test
  beforeEach(() => {
    // TestBed will create module for service
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        {
          provide: UtilsService,
          useValue: utilsServiceMock,
        },
      ],
    });
    // to get access to our service module
    userService = TestBed.inject(UsersService);
  });
  it('creates a service', () => {
    expect(userService).toBeTruthy();
  });
  describe('addUser', () => {
    it('should add user', () => {
      const user: UserInteface = {
        id: '1',
        name: 'foo',
      };
      userService.addUser(user);
      expect(userService.users).toEqual([{ id: '1', name: 'foo' }]);
    });
  });
  describe('removeUser', () => {
    it('should remove user', () => {
      userService.users = [{ id: '1', name: 'foo' }];
      const userId: string = '1';
      userService.removeUser(userId);
      expect(userService.users).toEqual([]);
    });
  });

  describe('get Usernames', () => {
    it('should get usernames', () => {
      utilsServiceMock.pluck.mockReturnValue(['foo']);
      expect(userService.getUsername()).toEqual(['foo']);
    });
  });
});
