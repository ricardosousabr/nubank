import './styles.scss';
import Logo from '../../img/logo.png';

function Header() {
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
                <a href="#">
                  <img className="header__logo" src={Logo} alt="Logo"/>
                </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
