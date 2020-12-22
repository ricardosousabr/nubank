import './styles.scss';
import PixImage from '../../img/pix.png';

function Pix() {
  return (
    <>
      <section className="pix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="pix__text">Pix: um novo jeito de fazer transferências e pagamentos</p>
              <a href="#">Saiba como funciona <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg></a>
              <div className="text-center">
              <img className="pix__img" src={PixImage} alt="pix"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pix;
