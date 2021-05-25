import { render, screen } from '@testing-library/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

async function renderAppComponent() {
  return render(AppComponent, {
    imports: [
      RouterTestingModule,
    ]
  });
};

describe('AppComponent', () => {
  it('should render counter', async () => {
    await renderAppComponent();

    expect(screen.getByText(/ng-ngrx-fundamentals/));
  });
});
