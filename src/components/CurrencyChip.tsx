import styled from 'styled-components';
import { CheckmarkCheckbox } from './CheckMark';

type CurrencyChipProps = {
    currency: {
        name: string;
    };
    selected: boolean;
    onClick: () => void;
};

export const CurrencyChip = ({
    currency,
    selected,
    onClick,
}: CurrencyChipProps) => {
    return (
        <Container
            data-testid='currency-chip'
            selected={selected}
            onClick={onClick}
        >
            <CheckmarkCheckbox
                data-testid='currency-chip-checkbox'
                checked={selected}
                onChange={onClick}
            />
            {currency.name}
        </Container>
    );
};

type ContainerProps = {
    selected: boolean;
};

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    width: 80%;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;

    cursor: pointer;
    &:hover {
        background-color: lightgray;
    }
`;
