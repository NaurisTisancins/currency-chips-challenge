import styled from 'styled-components';
import { Currency } from '../types';
import { SelectedChip } from './SelectedChip';

type SelectedChipsRowProps = {
    currencies: Currency[];
    removeCurrency: (currency: Currency) => void;
};

export const SelectedChipsRow = ({
    currencies,
    removeCurrency,
}: SelectedChipsRowProps) => {
    return (
        <Container>
            {currencies.map((currency: Currency) => (
                <SelectedChip
                    onClick={(currency: Currency) => removeCurrency(currency)}
                    currency={currency}
                />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    width: 500px;
    height: 80px;
`;
