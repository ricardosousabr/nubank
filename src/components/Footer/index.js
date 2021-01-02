import {FooterContainer, Title, Link} from './styles'

function Footer () {
  return (
    <>
      <FooterContainer>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Title>Nubank</Title>
              <ul>
                <li><Link href="">Sobre nós</Link></li>
                <li><Link href="">Carreiras</Link></li>
                <li><Link href="">Perguntas frequentes</Link></li>
                <li><Link href="">Contato</Link></li>
                <li><Link href="">Imprensa</Link></li>
              </ul>

            </div>
          </div>
        </div>
      </FooterContainer>
    </>
  );
}
export default Footer;