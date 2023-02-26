import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackernewsArticleComponent } from './hackernews-article.component';

describe('HackernewsArticleComponent', () => {
  let component: HackernewsArticleComponent;
  let fixture: ComponentFixture<HackernewsArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackernewsArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackernewsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
