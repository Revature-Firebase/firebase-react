import React from 'react';
// import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() })

it('renders learn react link', () => {
  const getByText = Enzyme.shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText.find("learn")).toBeTruthy();
});
