import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

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
            color: ${(props) => props.theme['purple-dark']};
            background-color: ${(props) => props.theme['purple-light']};
            padding: 0.5rem;
            gap: 0.25rem;
            margin-right: 0.75rem;
            cursor: pointer;
        }

        a {
            width: 3rem;
            color: ${(props) => props.theme['yellow-dark']};
            background-color: ${(props) => props.theme['yellow-light']};

            span {
                color: ${(props) => props.theme['white']};
                background-color: ${(props) => props.theme['yellow-dark']};
                padding: 0.125rem 0.5rem;
                border-radius: 1000px;
                
                position: absolute;
                right: 150px;
                top: 22px;
                z-index: 1;
            }
        }
    }
`