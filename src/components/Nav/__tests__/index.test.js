import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../index';

afterEach(cleanup);

describe(" Nav component", () => {
    // baseline test
    it("renders", () => {
        render(<Nav></Nav>)
    });

    // snapshot test
    it("matches snapshot Dom node structure", () => {
        //render nav
        const {asFragment} = render(<Nav></Nav>);
        expect(asFragment()).toMatchSnapshot();
    })
    
})

// emoji test
describe("emoji is visible", () => {
    it("inserts emoji into the h2", () => {
        // Arrange
        const { getByLabelText } = render(<Nav></Nav>);
        //Assert
        expect(getByLabelText("camera")).toHaveTextContent('📸');

    });
})

// Links are visible Test
describe("Links are visible", () => {
    it('inserts text into the links', () => {
        //Arrange
        const {getByTestId} = render(<Nav></Nav>);
        //Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
});