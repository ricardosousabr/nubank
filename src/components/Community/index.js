import Link from '../Link';
import { Text, DivImage } from './styles';

function community() {
  return (
    <>
      <DivImage>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Text>NuCommunity</Text>
              <Text>A comunidade oficial do Nubank</Text>
              <Link
                href="#"
                text="Tire dúvidas, compartilhe ideias e faça parte"
                up
              />
            </div>
          </div>
        </div>
      </DivImage>
    </>
  );
}

export default community;
