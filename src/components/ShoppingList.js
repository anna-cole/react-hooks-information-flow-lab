import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onCategoryChange(event) {
    setSelectedCategory(event.target.value);
    //console.log(event.target.value)
  }

  const itemsToDisplay = items.filter(item => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });
  // filter returns a new array with only the filtered elements that match the criteria

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={onCategoryChange}/>
      <ul className="Items">
        {itemsToDisplay.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
