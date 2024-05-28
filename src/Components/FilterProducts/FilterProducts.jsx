// to get product URL-----https://dummyjson.com/docs/products
import { useEffect, useState } from "react";
import "./Filter.css";
export default function FilterProducts() {
  const [Loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentSelectCategory, setCurrentSelectCategory] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  async function fetchProducts() {
    try {
      setLoading(true);
      const apiresponse = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });
      const result = await apiresponse.json();
      if (result?.products?.length > 0) {
        setLoading(false);
        setProducts(result.products);
        // on page load -display products
        setFilteredItems(result.products);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const copyProducts = [...products];
    setFilteredItems(
      currentSelectCategory !== ""
        ? products.filter(
            (productItem) =>
              productItem.category.toLowerCase() ===
              currentSelectCategory.toLowerCase()
          )
        : copyProducts
    );
  }, [currentSelectCategory]);

  //   which will create unique set
  const unquieCategories =
    products?.length > 0
      ? [...new Set(products.map((productItem) => productItem.category))]
      : [];
  // console.log(unquieCategories, "unquieCategories");
  if (Loading) {
    return <h3>Fetching the products!please wait</h3>;
  }
  return (
    <div className="filter-products-container">
      <h1>Filter Products By Category</h1>
      <div className="filter-unquieCategory-container">
        {unquieCategories.map((unquieCategoryItem) => {
          return (
            <button
              // when we click on the particular catergory only that category product will be displayed and if we click same category then all products will be displayed
              onClick={() =>
                setCurrentSelectCategory(
                  currentSelectCategory !== "" &&
                    currentSelectCategory === unquieCategoryItem
                    ? ""
                    : unquieCategoryItem
                )
              }
              className={`${
                currentSelectCategory === unquieCategoryItem ? "active" : ""
              }`}
            >
              {unquieCategoryItem}
            </button>
          );
        })}
      </div>
      <ul className="list-products">
        {filteredItems && filteredItems.length > 0
          ? filteredItems.map((filteredItem) => {
              return (
                <li
                  key={filteredItem.id}
                  className={`${
                    (filteredItem.category === "beauty" && "beautyactive") ||
                    (filteredItem.category === "fragrances" &&
                      "fragrancesactive") ||
                    (filteredItem.category === "furniture" &&
                      "furnitureactive") ||
                    (filteredItem.category === "groceries" && "groceriesactive")
                  }`}
                >
                  <p>{filteredItem.title}</p>
                  <button>{filteredItem.category.toUpperCase()}</button>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}
