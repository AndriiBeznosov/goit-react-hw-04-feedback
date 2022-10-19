import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Button = styled.button`
  color: ${p => p.theme.colors.btnСolorText};
  background-color: ${p => p.theme.colors.colorElement};
  border-radius: 5px;
  padding: 5px 10px;
  border: 0;
  transition: box-shadow 250ms ease, transform 250ms ease;
  &:not(:first-child) {
    margin-left: 10px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: ${p => p.theme.boxShadow};
  }
`;
