import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./Wishlist.module.css"
export const Wishlist = () => {
  const [query, setQuery] = useState("");
  const [wishes, setWishes] = useState([]);
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleAdd = () => {
    const payload = {
      value: query,
      id: uuid(),
    };
    let updatedWishes = [...wishes, payload];
    if (wishes !== "") {
      setWishes(updatedWishes);
      setQuery("");
    } else {
      alert("You haven't entered any wish");
    }
  };
  return (
    
    <div className={styles.div1}>
      <h1>Wishlist</h1>
      <div>
        <input
          placeholder="eneter wishes"
          onChange={handleChange}
          value={query}
        />
      </div>
      <button onClick={handleAdd}>ADD</button>
      <div>
        {wishes.map(({ value }, i) => {
          if (i<=3) {
            return <div key={uuid()}>{value}</div>;
          } else {
              return  null;
          }
        })}
      </div>
    </div>
  );
   
};
