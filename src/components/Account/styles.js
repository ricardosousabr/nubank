import styled from 'styled-components';
import { colors } from '../../tokens';

export const AccountIamge = styled.img`
  width: 100%;
`;

export const Text = styled.h2`
  font-size: 28px;
  font-weight: bold;
`;

export const LinkTitle = styled.a`
  font-size: 28px;
  color: ${colors.primary};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: none;
  }
`;
