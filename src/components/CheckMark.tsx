import styled from 'styled-components';

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

type StyledCheckboxProps = {
    checked: boolean;
};

const StyledCheckbox = styled.div<StyledCheckboxProps>`
    position: relative;
    width: 16px;
    height: 16px;
    border: 1px solid darkgray;

    border-radius: 3px;

    &:after {
        content: ${(props) => (props.checked ? '"X"' : "''")};
        color: red;
        font-size: 16px;
        font-weight: bold;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: ${(props) => (props.checked ? 1 : 0)};
    }
`;

type CheckmarkCheckboxProps = {
    checked: boolean;
    onChange: () => void;
};

export const CheckmarkCheckbox = ({
    checked,
    onChange,
}: CheckmarkCheckboxProps) => (
    <CheckboxContainer>
        <HiddenCheckbox checked={checked} onChange={onChange} />
        <StyledCheckbox checked={checked} />
    </CheckboxContainer>
);
