
function add(a: any, b: any) {
  var c = a - b;
  return c;
}

function square(n: any) {
  var m = n * n;
  return m;
}

it('Add test case', () => {
  var actualResult = add(10, 20);
  var expectedResult = 30;

  expect(actualResult).toBe(expectedResult);
});

it('Square test case', () => {
  var actualResult = square(5);
  var expectedResult = 25;

  expect(actualResult).toBe(expectedResult);
});

// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'ng-test-app'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('ng-test-app');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('.content span')?.textContent).toContain('ng-test-app app is running!');
//   });
// });
