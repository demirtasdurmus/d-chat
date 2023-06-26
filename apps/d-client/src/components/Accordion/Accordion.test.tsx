import { render, screen } from '@testing-library/react';
import { Accordion } from './Accordion';

describe('Accordion test', () => {
    test('Should show title one-1', () => {
        render(
            <Accordion title="Testing">
                <h4>Content</h4>
            </Accordion>,
        );

        expect(screen.getByText(/Testing/i)).toBeDefined();
    });
    test('Should show title two-2', () => {
        render(
            <Accordion title="test">
                <p>test</p>
            </Accordion>,
        );
        const element = screen.getByRole('heading');
        expect(element).toBeDefined();
        expect(element).toBeInTheDocument();
    });
});
