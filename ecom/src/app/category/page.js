"use client"
import Link from 'next/link';
import { useState } from 'react';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    {
      name: "Men",
      items: [
        { name: "Shirts", path: "/men/shirts" },
        { name: "Pants", path: "/men/pants" },
      ],
    },
    {
      name: "Women",
      items: [
        { name: "Dresses", path: "/women/dresses" },
        { name: "Tops", path: "/women/tops" },
      ],
    },
    {
      name: "Kids",
      items: [
        { name: "Toys", path: "/kids/toys" },
        { name: "Clothes", path: "/kids/clothes" },
      ],
    },
    {
      name: "Kitchen",
      items: [
        { name: "Cookware", path: "/kitchen/cookware" },
        { name: "Utensils", path: "/kitchen/utensils" },
      ],
    },
    {
      name: "Beauty",
      items: [
        { name: "Skincare", path: "/beauty/skincare" },
        { name: "Makeup", path: "/beauty/makeup" },
      ],
    },
    {
      name: "Home & Living",
      items: [
        { name: "Furniture", path: "/home/furniture" },
        { name: "Decor", path: "/home/decor" },
      ],
    },
    {
      name: "Footwear",
      items: [
        { name: "Sneakers", path: "/footwear/sneakers" },
        { name: "Sandals", path: "/footwear/sandals" },
      ],
    },
    {
      name: "Topwear",
      items: [
        { name: "T-shirts", path: "/topwear/t-shirts" },
        { name: "Shirts", path: "/topwear/shirts" },
      ],
    },
    {
      name: "Bottomwear",
      items: [
        { name: "Jeans", path: "/bottomwear/jeans" },
        { name: "Shorts", path: "/bottomwear/shorts" },
      ],
    },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); 
  };

  
  return (
    <div className="container mt-4">
      <h1>Categories</h1>
      <div className="d-flex flex-wrap mb-3">
        {categories.map((category, index) => (
          <button
            key={index}
            className="btn btn-secondary m-2"
            onClick={() => handleCategoryClick(category)} 
          >
            {category.name}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div className="mt-4">
          <h2>{selectedCategory.name}</h2>
          <ul className="list-group">
            {selectedCategory.items.map((item, idx) => (
              <li key={idx} className="list-group-item">
                <a href={item.path} className="text-decoration-none">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Category;