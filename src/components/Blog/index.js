import Link from '../Link';
import { Text, DivImage, Div } from './styles';

function Blog() {
  return (
    <>
      <DivImage>
        <div className="container">
          <div className="row">
            <Div className="col-12">
              <Text>Um blog para você repensar o seu dinheiro</Text>
              <Link href="#" text="Conheça o Fala, Nubank" up />
            </Div>
          </div>
        </div>
      </DivImage>
    </>
  );
}

export default Blog;
