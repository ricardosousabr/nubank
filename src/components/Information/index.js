import Link from '../Link';
import { Text, DivImage } from './styles';

function Information() {
  return (
    <>
      <DivImage>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Text>Reinventando a relação das pessoas com o dinheiro</Text>
              <Link text="É nisso que acreditamos" href="#" />
            </div>
          </div>
        </div>
      </DivImage>
    </>
  );
}

export default Information;
