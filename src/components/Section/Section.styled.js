import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 420px;
  padding: 15px;
  background-color: ${p => p.theme.colors.backgroundColors};
  box-shadow: ${p => p.theme.boxShadow};
  border-radius: 10px;
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.colorText};
  margin-top: 0;
  margin-bottom: 0;
`;
