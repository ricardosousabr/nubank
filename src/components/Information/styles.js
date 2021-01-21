import styled from 'styled-components';
import challenge from '../../img/challenge-system-large.jpg';

export const Text = styled.h2`
  margin-top: 60px;
  font-size: 28px;
  margin-bottom: 32px;
  color: white;
`;

export const DivImage = styled.div`
  background-image: url(${challenge});
  background-position: center center;
  background-size: cover;
  padding: 130px 25px;
`;
