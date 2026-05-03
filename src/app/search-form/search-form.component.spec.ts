import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SearchFormComponent } from './search-form.component';
import { AppModule } from '../app.module';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the input value on the first submit', () => {
    const emitSpy = vi.spyOn(component.emitSearch, 'emit');
    const input = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    const form = fixture.debugElement.query(By.css('form'));

    input.value = 'octocat';
    form.triggerEventHandler('ngSubmit');

    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toHaveBeenCalledWith('octocat');
  });
});
