import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContractsComponent } from './search-contracts.component';

describe('SearchContractsComponent', () => {
  let component: SearchContractsComponent;
  let fixture: ComponentFixture<SearchContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
