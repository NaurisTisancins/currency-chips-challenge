import styled from 'styled-components';
import { Currency } from '../types';

type SelectedChipProps = {
    currency: {
        name: string;
    };
    onClick: (currency: Currency) => void;
};

export const SelectedChip = ({ currency, onClick }: SelectedChipProps) => {
    return (
        <Container data-testid='selected-currency-chip'>
            {currency.name}
            <CloseButton onClick={() => onClick(currency)}>X</CloseButton>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    width: 80%;
    height: 40px;
    background-color: lightgray;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: lightgray;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: -8px;
    right: -10px;
    width: 20px;
    height: 20px;
    background-color: darkgray;
    border-color: darkgray;
    border-radius: 50%;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: darkgray;
        border: 1px solid darkgray;
    }
`;
