import React from "react";
import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import "./itemlistcontainer.css"

function ItemListContainer(props) {
  return (
    <>
      <FlexWrapper>
        <Card
          img="https://www1.cbn.com/sites/default/files/styles/video_ratio_16_9/public/media/slider/images/rescatebanda_hdv.jpg"
          title="Rescate"
          detail="Despedida"
          price="100"
        />
        <Card
          img="https://www.gacetacristiana.com.ar/web/wp-content/uploads/2022/08/vico.jpg"
          title="Vico C"
          detail="Rapero"
          price="150"
        />
         <Card
          img="https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2016/06/29/Production/ETL/ETL-A/Images/Miel%20San%20Marcos.jpg"
          title="Miel San Marcos"
          detail="Rapero"
          price="250"
        />
         <Card
          img="https://i.scdn.co/image/ab67616d0000b273bec41c7048fa5e742bd4707f"
          title="Barak"
          detail="Grupo Musical"
          price="100"
        />
      </FlexWrapper>
    </>
  );
}

export default ItemListContainer;
