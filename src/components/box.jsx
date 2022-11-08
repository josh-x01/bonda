import React from "react";
import Data from "../data/items.json"

export default () => {
    console.log(Data.items);
    const box = () => {
     
    const itemBox = [];
    

  
        return <div>
        <ul>
            {Data.items.map(item => {
        return <li> <div className="card center item-box">
        <div className="picture-box">
        <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ce8a6f3aa6294de988d7abce00c4e459_9366/Breaknet_Shoes_White_FX8707_01_standard.jpg" width="306px" height="280px" alt="item image" className="card-img-top" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text">{item.price}</p>
          <a href="#" className="btn btn-primary buy">+</a>
        </div>
      </div>
      </li>

    })
            }
            </ul>
            </div>
    }
    return box();
}