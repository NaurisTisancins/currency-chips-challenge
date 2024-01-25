import React from 'react';
import styled from 'styled-components';

import { CurrencyChip } from './CurrencyChip';
import { Currency } from '../types';
import { SelectedChipsRow } from './SelectedChipsRow';

const currencies: Currency[] = [
    { name: 'EUR' },
    { name: 'PLN' },
    { name: 'GEL' },
    { name: 'DKK' },
    { name: 'CZK' },
    { name: 'GBP' },
    { name: 'SEK' },
    { name: 'USD' },
    { name: 'RUB' },
];

export const CurrencySelector = () => {
    const [selectedCurrencies, setSelectedCurrencies] = React.useState<
        Currency[]
    >([]);

    function isCurencySelected(currency: Currency): boolean {
        return selectedCurrencies.includes(currency);
    }

    function selectCurrency(currency: Currency) {
        if (selectedCurrencies.length === 3) {
            return;
        }
        setSelectedCurrencies([...selectedCurrencies, currency]);
    }

    function removeCurrency(currency: Currency) {
        setSelectedCurrencies(
            selectedCurrencies.filter((c) => c.name !== currency.name)
        );
    }

    return (
        <Container>
            <SelectedChipsRow
                currencies={selectedCurrencies}
                removeCurrency={(currency: Currency) =>
                    removeCurrency(currency)
                }
            />
            <CurrencyChipContainer data-testid='currency-chip-container'>
                {currencies.map((currency) => (
                    <CurrencyChip
                        key={currency.name}
                        currency={currency}
                        onClick={() => {
                            if (isCurencySelected(currency)) {
                                removeCurrency(currency);
                            } else {
                                selectCurrency(currency);
                            }
                        }}
                        selected={isCurencySelected(currency)}
                    />
                ))}
            </CurrencyChipContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 500px;
    height: 300px;
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

const CurrencyChipContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    width: 100%;
    height: 250px;
    overflow: auto;
`;
