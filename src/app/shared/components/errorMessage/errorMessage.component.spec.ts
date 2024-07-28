// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ErrorMessageComponent } from './errorMessage.component';
// import { By } from '@angular/platform-browser';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorMessageComponent } from './errorMessage.component';
import { By } from '@angular/platform-browser';

// describe('ErrorMessageComponent', () => {
//   let component: ErrorMessageComponent;
//   let fixture: ComponentFixture<ErrorMessageComponent>;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [ErrorMessageComponent],
//     }).compileComponents();

//     fixture = TestBed.createComponent(ErrorMessageComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('creates component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('renders default error state', () => {
//     const messageContainer = fixture.debugElement.query(
//       By.css('[data-testid="message-container"]')
//     );

//     expect(messageContainer.nativeElement.textContent).toEqual(
//       'Something went wrong'
//     );
//   });

//   it('renders custom error message', () => {
//     component.message = 'Email is already taken';
//     fixture.detectChanges();

//     const messageContainer = fixture.debugElement.query(
//       By.css('[data-testid="message-container"]')
//     );
//     expect(messageContainer.nativeElement.textContent).toEqual(
//       'Email is already taken'
//     );
//   });
// });

describe('errorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ErrorMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create a component', () => {
    expect(component).toBeTruthy();
  });

  it('render default error state', () => {
    const messageContainer = fixture.debugElement.query(
      By.css('[data-testid="message-container"]') // this will look element with attribute like thatssss
    );
    expect(messageContainer.nativeElement.textContent).toEqual(
      'Something went wrong'
    );
  });

  it('render custom error message', () => {
    component.message = 'Email is already taken';
    fixture.detectChanges();
    const messageContainer = fixture.debugElement.query(
      By.css('[data-testid="message-container"]')
    );
    expect(messageContainer.nativeElement.textContent).toEqual('Email is already taken')
  });
});
