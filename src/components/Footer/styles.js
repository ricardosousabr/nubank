import styled from 'styled-components';
import { colors } from '../../tokens';

export const FooterContainer = styled.footer`
  background: ${colors.dark};
`;

export const Title = styled.p`
  margin-top: 48px;
  color: ${colors.white};
`;

export const Group = styled.ul`
  margin-bottom: 0;
  padding-left: 0;
`;

export const List = styled.li`
  list-style-type: none;
  color: ${colors.white};
`;

export const Link = styled.a`
  color: ${colors.white};
  text-decoration: none;

  &:hover {
    color: ${colors.white};
  }
`;
