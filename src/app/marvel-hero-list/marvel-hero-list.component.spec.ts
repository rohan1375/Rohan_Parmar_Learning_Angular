import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelHeroListComponent } from './marvel-hero-list.component';

describe('MarvelHeroListComponent', () => {
  let component: MarvelHeroListComponent;
  let fixture: ComponentFixture<MarvelHeroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarvelHeroListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelHeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
