import styled from 'styled-components';
import smile from '../../img/device-smile.jpg';

export const Text = styled.h2`
  font-size: 28px;
  margin: 0px 0px 32px;
  color: white;
`;

export const Div = styled.div`
  padding-bottom: 234px;
`;

export const DivImage = styled.section`
  background-image: url(${smile});
  background-position: center center;
  background-size: cover;
  padding: 64px 22px;
`;
