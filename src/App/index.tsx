import React from "react";
// @ts-ignore
import "./styles.css";
import { Tile } from "../Tile";
import { TileData } from "../data";
import headerImg from "../images/header.jpg";

export const App: React.FC = () => {
  return (
    <main>
      <div className="pageWrapper">
        <div className="header">
          <h1 className="headerText">Столешницы с закругленной кромкой</h1>

          <img src={headerImg} className="headerImage" />

          <h4 className="text">
            Основа столешниц с закругленной кромкой (постформинг) –
            древесностружечная плита, покрытая декоративным пластиком HPL
            (ламинат высокого давления) и укрепленная на внешней стороне
            специальной вставкой из HDF (ДВП), что делает их идеальной рабочей
            поверхностью для кухнь, офисов и магазинов. Специальная силиконовая
            полоска, расположенная под профилем, вдоль всей длины столешницы,
            образует барьер для капель и защищает от воды. Столешницы могут
            поставляться со слегка закругленным U-образным профилем и радиусом
            закругления 3,3
          </h4>

          <h3 className="text">
            г. Челябиинск, Копейское шоссе 17а Номер телефона +8(995)4663606
          </h3>
        </div>

        {TileData.map((tile) => (
          <Tile imageSrc={tile.imageSrc} text={tile.text} />
        ))}
      </div>
    </main>
  );
};
