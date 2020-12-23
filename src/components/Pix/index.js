import './styles.scss';
import PixImage from '../../img/pix.png';
import Link from '../Link';

function Pix() {
  return (
    <>
      <section className="pix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="pix__title">Pix: um novo jeito de fazer transferências e pagamentos</p>
              <Link/>
              <div className="text-center">
                <img className="pix__img" src={PixImage} alt="pix"/>
              </div>
              <div className="pix__account">
                <h3 className="pix__text">Peça sua conta e cartão de crédito do Nubank</h3>
                <input className="pix__input" placeholder="Digite seu CPF" type="text"/>
                <button className="pix__button"><strong>Continuar</strong><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 21 20" class="SVGWrapper-c62y5b-0 ilbcfK" color="currentColor" role="img"><title>Arrow Right</title><g><path d="M18.5 10H2.5M18.5 10L12 16.5M18.5 10L12 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path></g></svg></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pix;
