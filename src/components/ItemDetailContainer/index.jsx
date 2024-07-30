import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const dashboard = [
    {id: 1, image: "https://i.postimg.cc/HnyjKcgG/dashboard1.jpg", title: " En este página podemos tener un acercamiento a las gráficas y los resultados que nos dan una vista global de los datos, se muestra la suma de ventas, en millones, las ventas por región, además de las ventas por plataforma, y por último se muestra un ranking de ventas.", categoria:"videogame"  },
    {id: 2, image: "https://i.postimg.cc/wj18G1X4/dashboard2.jpg", title: "Podemos observar en esta presentación la visualización a travéz de un mapa las regiones dónde se focalizan las ventas, cómo así también las ventas por género y el ranking de los más vendidos por Región", categoria:"videogame"},
    {id: 3, image: "https://i.postimg.cc/5ychmcHf/dashboard-P1.jpg", title: "Vista de los datos a través del filtro de Plataforma", categoria:"plataforma"},
    {id: 4, image: "https://i.postimg.cc/zBRmWDGd/dashboard-G1.jpg", title: "Vista de los Datos a través del filtro de Género", categoria:"genero"},
    {id: 5, image: "https://i.postimg.cc/NGmqj0VF/dashboard-P2.jpg", title: "Se aplica el filtro Plataforma para visualizar datos", categoria:"plataforma" },
    {id: 6, image: "https://i.postimg.cc/g07FnLmX/dashboard-E1.jpg", title: "Se aplica el filtro Editorial para visualizar datos",categoria:"editorial"}
]

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const{ detalleId } = useParams();

useEffect(() => {
    const getData = new Promise(resolve =>{
        setTimeout(() =>{
            resolve(dashboard);
        }, 1000)
});
getData.then(res => setData(res.find(dashboard => dashboard.id === parseInt(detalleId))));
}, [detalleId])
    return(
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;