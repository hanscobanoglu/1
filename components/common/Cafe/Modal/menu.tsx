import React, { FunctionComponent } from "react";
import { AnaYemek, Corba, İcecek } from "../DumyData";

interface Props {
  sepetOpen?: any;
}
const Menu: FunctionComponent<Props> = (props: Props) => {
  let arr: any = [];
  const funcSiparisVer = (siparis: any) => {
    arr.push({ ...arr, siparis });
    console.log(...arr, siparis);
  };
  const { sepetOpen } = props;
  console.log(sepetOpen);
  return (
    <div>
      {sepetOpen === true ? console.log("geldim") : console.log("Alo")}
      <div className="foot-container">
        <h2 className="foot-header">Ana Yemek</h2>
        {AnaYemek.map((item, index) => (
          <div key={index}>
            {item === undefined ? (
              <div>Menü Çekilemedi </div>
            ) : (
              <div>
                <div className="foot-wrapper">
                  <div className="foot-title"> {item.title}</div>

                  <div className="foot-price">Fiyat : {item.fiyat}</div>
                  <img className="foot-img" src={item.img} />
                  <button className="ui inverted green button">
                    Sepete Ekle
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
        <h2 className="foot-header">Çorbalar</h2>
        {Corba.map((item, index) => (
          <div key={index}>
            {item === undefined ? (
              <div>Menü Çekilemedi </div>
            ) : (
              <div>
                <div className="foot-wrapper">
                  <div className="foot-title"> {item.title}</div>

                  <div className="foot-price">Fiyat : {item.fiyat}</div>
                  <img className="foot-img" src={item.img} />
                  <button className="ui inverted green button">
                    Sepete Ekle
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
        <h2 className="foot-header">İçecekler</h2>
        {İcecek.map((item, index) => (
          <div key={index}>
            {item === undefined ? (
              <div>Menü Çekilemedi </div>
            ) : (
              <div>
                <div className="foot-wrapper">
                  <div className="foot-title"> {item.title}</div>

                  <div className="foot-price">Fiyat : {item.fiyat}</div>
                  <img className="foot-img" src={item.img} />
                  <button
                    className="ui inverted green button"
                    onClick={() => funcSiparisVer(item)}
                  >
                    Sepete Ekle
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
