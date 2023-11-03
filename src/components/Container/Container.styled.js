import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 0 15px;
  max-width: 428px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;
