import React from "react";
import Item from "../Item";

const ItemList = ({data = []}) => {
    return(
        data.map(dashboard => <Item key={dashboard.id} info={dashboard}/>)
    )
}
export default ItemList;