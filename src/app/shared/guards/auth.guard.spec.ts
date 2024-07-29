import { TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { authGuard } from './auth.guard';
import { CurrentUserService } from './currentUser.service';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  const mockCurrentUser = {
    currentUser$: of<{ id: string } | null>(null),
  };
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: CurrentUserService, useValue: mockCurrentUser }],
    });
    router = TestBed.inject(Router);
  });

  it('return false for not logged in user', () => {
    waitForAsync(() => {
      jest.spyOn(router, 'navigateByUrl').mockImplementation();
      TestBed.runInInjectionContext(() => {
        return authGuard();
      }).subscribe((result) => {
        expect(result).toBe(false);
        expect(router.navigateByUrl).toHaveBeenCalledWith('/');
      });
    });
  });

  it('return true for logged in user', () => {
    waitForAsync(() => {
      mockCurrentUser.currentUser$ = of({ id: '1' });
      TestBed.runInInjectionContext(() => {
        return authGuard();
      }).subscribe((result) => expect(result).toBe(true));
    });
  });
});
