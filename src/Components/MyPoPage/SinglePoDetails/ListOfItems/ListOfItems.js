import React from "react";
import ListItemCard from "./ListItemCard";

const ListOfItems = () => {
  return (
    <div className="listContainer">
      <h4
        className="infoTitle"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        List of Items
      </h4>
      {/* <ListItemCard></ListItemCard>
            <ListItemCard></ListItemCard> */}

      <div className="singleListItemCard">
        <div className="justify-content-between">
          <h3 className="PoBoxTitle" style={{ marginLeft: "20px" }}>
            Looking for some Electronic Accessories for Office
          </h3>
          <p className="singleItemSubTitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen boo...
          </p>
        </div>

        <div className="cardBoxBody d-flex">
          <button className="singleItemNameBox mb-3">Mouse sfsfsdb </button>
        </div>
      </div>
    </div>
  );
};

export default ListOfItems;
