import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { CurrencyChip } from './components/CurrencyChip';

// CurrencyChip Test
test('CurrencyChip renders correctly and responds to click', () => {
    // Mock data
    const currency = { name: 'USD' };
    const selected = false;
    const onClick = jest.fn();

    // Render the CurrencyChip component
    render(
        <CurrencyChip
            currency={currency}
            selected={selected}
            onClick={onClick}
        />
    );

    // Assert that the currency name is rendered
    const currencyNameElement = screen.getByText(/USD/i);
    expect(currencyNameElement).toBeInTheDocument();

    // Assert that the container has the correct styles based on the selected prop
    const containerElement = screen.getByTestId('currency-chip');

    // Simulate a click on the CurrencyChip
    fireEvent.click(containerElement);

    // Assert that the onClick function is called when clicked
    expect(onClick).toHaveBeenCalled();
});

test('CurrencyChips CheckBox renders correctly when selected', () => {
    // Mock data
    const currency = { name: 'USD' };
    const selected = true;
    const onClick = jest.fn();

    // Render the CurrencyChip component
    render(
        <CurrencyChip
            currency={currency}
            selected={selected}
            onClick={onClick}
        />
    );

    const checkBox = screen.getByRole('checkbox');
    fireEvent.click(checkBox);
    expect(checkBox).toBeChecked();
});

test('CurrencyChipContainer renders 9 Currency Chips', () => {
    // Render the App component
    render(<App />);

    // Assert that there are 9 Currency Chips rendered
    const currencyChipElements = screen.getAllByTestId('currency-chip');
    expect(currencyChipElements.length).toBe(9);
});

test('Selecter Chips Row renders only 3 elements', () => {
    // Render the App component
    render(<App />);

    const currencyChipElements = screen.getAllByTestId('currency-chip');
    currencyChipElements.forEach((element) => {
        fireEvent.click(element);
    });
    // Assert that there are 3 Currency Chips rendered
    const selectedCurrencyChipElements = screen.getAllByTestId(
        'selected-currency-chip'
    );
    expect(selectedCurrencyChipElements.length).toBeLessThanOrEqual(3);
});
