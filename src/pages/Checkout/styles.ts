import styled from "styled-components";

export const CheckoutContainer = styled.main`
    display: flex;
    margin-top: 2.5rem;

    div { 
        background: ${({ theme }) => theme.colors["base-card"]}
    }
`