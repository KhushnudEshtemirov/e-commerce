import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addFurniture } from "../../reduxtoolkit/furniture/furniture-slice";

import { data } from "../data";

import "./navbar.scss";

import { BsList } from "react-icons/bs";
import { TfiSearch, TfiHeart, TfiUser } from "react-icons/tfi";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const { furnitureItems } = useSelector((store) => store.furniture);

  const numberOfItems = furnitureItems.reduce(
    (totalNumber, item) => totalNumber + item.quantity,
    0
  );

  let filteredItems = data.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleClick = (product) => {
    const isExist = furnitureItems.find((item) => item.id === product.id);

    if (isExist) {
      return furnitureItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }

    return [...furnitureItems, { ...product, quantity: 1 }];
  };

  return (
    <div className="row navbar">
      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 category">
        <Link to="">
          <BsList />
          <span>Categories</span>
        </Link>
      </div>
      <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3 actions">
        <Link to="">Actions</Link>
      </div>
      <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3 brends">
        <Link to="">Brends</Link>
      </div>
      <div
        className="col-xl-5 col-lg-5 col-md-3 col-sm-6 col-6 search-field"
        onChange={(e) => setSearchValue(e.target.value)}
      >
        <div>
          <input to="" placeholder="Search..." />
          <TfiSearch />
        </div>
        {searchValue ? (
          <div className="search_result">
            {filteredItems.length > 0 ? (
              <div className="search_body">
                {filteredItems.map((item) => (
                  <div key={item.id} className="result_item">
                    <div>
                      <img src={item.img} alt="result" width="80" />
                    </div>
                    <div>
                      <p>{item.title}</p>
                      <span>${item.price}</span>
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          dispatch(addFurniture(handleClick(item)))
                        }
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <h2 className="not_found">Any item not found</h2>
            )}
          </div>
        ) : null}
      </div>
      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 icons">
        <Link to="">
          <TfiUser />
        </Link>
        <Link to="">
          <TfiHeart />
        </Link>
        <Link to="/cartItems">
          <BsCart3 />
          {numberOfItems !== 0 ? (
            <div className="product-num">
              <span>{numberOfItems}</span>
            </div>
          ) : null}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
