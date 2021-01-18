import styled from 'styled-components';
import { colors } from '../../tokens';

export const LinkTitle = styled.a`
  font-size: 28px;
  color: ${colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const Text = styled.h2`
  font-size: 28px;
  margin-bottom: 32px;
`;

export const Div = styled.div`
  margin-left: 26px;
  margin-top: 58px;
`;

export const DivImage = styled.div`
  margin-left: 48px;
`;
