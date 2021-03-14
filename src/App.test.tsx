import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

test('renders the component', () => {
    const initialState = {};
    const mockStore = configureStore();
    const store = mockStore(initialState);

    const component = shallow(
        <Provider store={store}>
            <App />
        </Provider>,
    );
    expect(component).toMatchSnapshot();
});
