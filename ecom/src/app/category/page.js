import Link from 'next/link';

const Category = () => {
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

  
  return (
    <div className="container mt-4">
      <h1>Categories</h1>
      {categories.map((category, index) => (
        <div key={index} className="dropdown mb-3">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id={`dropdownMenuButton-${index}`}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {category.name}
          </button>
          <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton-${index}`}>
            {category.items.map((item, idx) => (
              <li key={idx}>
                <a href={item.path} className="dropdown-item">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Category;