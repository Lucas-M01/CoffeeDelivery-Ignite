import styled, { css } from "styled-components";

export interface QuantityInputProps {
    size: "medium" | "small";
}

export const QuantityInputContainer = styled.div<QuantityInputProps>`
    background: ${({theme}) => theme.colors["base-button"]};
    display: flex;
    align-items: center;
    border-radius: 6px; 
    

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: transparent;
        width: 1.25rem;
        margin-right: 0.25rem;
        margin-left: 0.25rem;
        border: none;
        color: ${({theme}) => theme.colors["base-title"]};
        

        &:focus {
            outline: none;
        }
    }

    ${({ size }) => 
    size === "medium" && css`
        padding: 0.5rem;
    `}
    
    ${({ size }) => 
    size === "small" && css`
        padding: 0.3rem 0.5rem;
    `}
`

export const IconWrapper = styled.button.attrs({
    type: "button",
})`
    width: 0.875rem;
    height: 0.875rem;
    border: none;
    background: none;
    color: ${({theme}) => theme.colors["purple"]};
    transition: 0.1s;
    cursor: pointer;

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }

    &:hover {
        color: ${({theme}) => theme.colors["purple-dark"]};
    }
`