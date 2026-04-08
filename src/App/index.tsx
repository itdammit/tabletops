import React from "react";
import "./styles.css";
import { Tile } from "../Tile";
import { TileData } from "../data";

export const App: React.FC = () => {
  return (
    <main>
      <div className="pageWrapper">
        <div className="header">
          <h1>Столешницы с закругленной кромкой</h1>

          <img src={"src/images/header.jpg"} className="imageheader" />

          <h4>
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

          <h3>
            Str. Mihail Kogalniceanu Nr.59, Alba county, Romania, 515800, Sebes
            email sales.sebes@kronospan.ro phoneT +40 258 80 11 00
          </h3>
        </div>

        {TileData.map((tile) => (
          <Tile imageSrc={tile.imageSrc} text={tile.text} />
        ))}
      </div>
    </main>
  );
};
