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

export const LinkSvg = styled.a`
  margin-left: 40px;
  margin-bottom: 60px;
`;

export const DivBorder = styled.div`
  padding-top: 70px;
  padding-bottom: 70px;
  border-top: 1px solid ${colors.white};
  border-bottom: 1px solid ${colors.white};
`;

export const SvgApple = styled.svg`
  margin-bottom: 20px;
`;

export const SvgPlay = styled.svg`
  margin-bottom: 90px;
`;

export const SvgFooter = styled.svg`
  margin-bottom: 40px;
`;

export const TextFooter = styled.p`
  margin-bottom: 40px;
`;
