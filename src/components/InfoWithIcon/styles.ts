import styled from 'styled-components'

interface IconsContainerProps {
    iconBg: string;
}

export const InfoWithIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

export const IconContainer = styled.div<IconsContainerProps>`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    background-color: ${({ iconBg }) => iconBg };
    color: ${({theme}) => theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;
`