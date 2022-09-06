import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    nav {
        display: flex;
        gap: 0.5rem;

        a, p {
            height: 3rem;

            display: flex;
            justify-content: center;
            align-items: center;
            
            border-radius: 6px;
        }

        p {
            color: ${({theme}) => theme.colors['purple-dark']};
            background-color: ${({theme}) => theme.colors['purple-light']};
            padding: 0.5rem;
            gap: 0.25rem;
            margin-right: 0.75rem;
            cursor: pointer;
        }

        a {
            width: 3rem;
            color: ${({theme}) => theme.colors['yellow-dark']};
            background-color: ${({theme}) => theme.colors['yellow-light']};

            span {
                color: ${({theme}) => theme.colors['white']};
                background-color: ${({theme}) => theme.colors['yellow-dark']};
                padding: 0.125rem 0.5rem;
                border-radius: 1000px;
                
                position: absolute;
                right: 150px;
                top: 22px;
                z-index: 5;
            }
        }
    }
`