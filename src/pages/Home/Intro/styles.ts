import styled from "styled-components";
import { TitleText } from "../../../components/Typography";

export const HomeContainer = styled.main`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8.75rem;
    margin-top: 5.4rem;
`

export const Intro = styled.div`
    width: 37rem;
`

export const IntroTitle = styled(TitleText) `
    margin-bottom: 1rem;
`

export const ItensContainer = styled.section`
    width: 100%;
    
    display: grid;
    grid-template-columns: 1fr 1fr; 
    row-gap: 1.25rem;
    margin-top: 4.125rem;
`