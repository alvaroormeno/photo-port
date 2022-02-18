import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);


describe('Contact is rendering', () => {

    it('renders', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('ctTag')).toHaveTextContent('Contact me')
      })

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot()
      })

  it('renders', () => {
    render(<ContactForm/>);
  });
})