import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import DetailsPage from '../components/detailsPage';
import store from '../Redux/configureStore';

describe('Character Details', () => {
  test('Render character details page', () => {
    const detailsPage = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <DetailsPage />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(detailsPage).toMatchSnapshot();
  });
});
