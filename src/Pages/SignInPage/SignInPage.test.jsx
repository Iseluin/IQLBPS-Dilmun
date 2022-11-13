import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import SignInPage from './SignInPage';
import SignIn from '../../components/SignIn/SignIn';
import { store } from '../../app/store';

test('Sign In Page Rendered Correctly', () => {
  render(
    <Provider store={store}>
      <Router>
        <SignInPage>
          <SignIn />
        </SignInPage>
      </Router>
    </Provider>
  );
  expect(screen.getByTestId('sign-in-page')).toMatchSnapshot();
});
