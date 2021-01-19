import RewardsImage from '../../img/rewards-home-card.png';
import Link from '../Link';
import { RewaedsSection, LinkTitle, Text, Div, DivImage } from './styles';

function Rewards() {
  return (
    <>
      <RewaedsSection className="container">
        <div className="row">
          <Div className="col-10">
            <LinkTitle href="#">Rewards</LinkTitle>
            <Text>Um programa de pontos justo e fácil de usar.</Text>
            <Link text="Saiba mais" up href="#" />
          </Div>
          <DivImage className="col-11">
            <img src={RewardsImage} alt="" />
          </DivImage>
        </div>
      </RewaedsSection>
    </>
  );
}

export default Rewards;
