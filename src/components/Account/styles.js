import styled from 'styled-components';
import { colors } from '../../tokens';

export const AccountSection = styled.div`
  background: #f8f8f8;
`;

export const Div = styled.div`
  margin-left: 26px;
  margin-top: 58px;
`;

export const AccountIamge = styled.img`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 58px;
`;

export const Text = styled.h2`
  font-size: 28px;
  margin-bottom: 32px;
`;

export const LinkTitle = styled.a`
  font-size: 28px;
  color: ${colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;
