import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { TodosService } from '../../services/todos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('headerComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let todosService: TodosService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderComponent, HttpClientTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    todosService = TestBed.inject(TodosService);
  });

  it('creates a component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a todo', () => {
    // mockImplementation is used to replace the actual implementation of the addTodo method with an empty function. This is helpful when you want to control the behavior of the method during the test without actually invoking its real implementation.
    jest.spyOn(todosService, 'addTodo').mockImplementation(() => {});
    const input = fixture.debugElement.query(
      By.css('[data-testid="newTodoInput"]')
    );
    input.nativeElement.value = 'foo';
    input.nativeElement.dispatchEvent(
      new KeyboardEvent('keyup', { key: 'Enter' })
    );
    expect(todosService.addTodo).toHaveBeenCalledWith('foo');
    expect(component.text).toEqual('');
  });
});
