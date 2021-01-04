import React from 'react';

import './styles.scss';
import FgtsImage from '../../img/fgts.jpg';
import Link from '../Link';

function Fgts() {
  return (
    <>
      <section className="fgts">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="fgts__text">
                Traga seu FGTS e Auxílio Emergencial para o Nubank
              </h2>
              <Link text="Confira os benefícios" inverted />
              <img className="fgts__img" src={FgtsImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Fgts;
