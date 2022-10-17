import styled from "styled-components";

export const CompleteOrderContainer = styled.form`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
`;

export const EmptyCartItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  section { 
    border-radius: 5px;
    padding: 2rem;
    background-color: ${({theme}) => theme.colors["base-card"]};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
    }

    p {
      font-size: ${({ theme }) => theme.textSizes["text-bold-l"]};
      margin-top: 4px;
    }
  }
`;