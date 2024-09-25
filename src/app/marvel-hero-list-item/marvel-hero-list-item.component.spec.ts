import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelHeroListItemComponent } from './marvel-hero-list-item.component';

describe('MarvelHeroListItemComponent', () => {
  let component: MarvelHeroListItemComponent;
  let fixture: ComponentFixture<MarvelHeroListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarvelHeroListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelHeroListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
