import React from 'react';
import ReactDOM from 'react-dom';
import Jourtrip from './Jourtrip';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Jourtrip />, div);
  ReactDOM.unmountComponentAtNode(div);
});
