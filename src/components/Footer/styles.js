import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: black;
`;

export const Title = styled.p`
  color: white;
`;

export const Group = styled.ul`
  padding-left: 0;
`;

export const List = styled.li`
  display: flex;
  list-style-type: none;
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;
