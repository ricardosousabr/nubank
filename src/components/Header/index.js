import './styles.scss';
import Logo from '../../img/logo.png';

function Header() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img src={Logo} alt=""/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
