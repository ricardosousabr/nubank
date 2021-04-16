import styled from 'styled-components';
import { colors } from '../../tokens';

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoImage = styled.img`
  width: 80px;
  height: 80px;
`;

export const ButtonNav = styled.button`
  background: transparent;
`;

export const Menu = styled.ul`
  background: greenyellow;
  transform: translateY(-350px);
`;

export const LinkHeader = styled.a`
  color: ${colors.primary};
  text-decoration: none;
`;
