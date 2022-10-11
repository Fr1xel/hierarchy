import Products from "./products/products";
import SearchProducts from "./search/search-products";

const ProductsJSON = {
    electronics: {
        title: "Electronics",
        products: [
            {name: "IPhone XS", price:"399$"},
            {name: "HDMI Cable 1m", price:"20$"},
            {name: "Samsung A12", price:"250$"},
            {name: "Acer Monitor", price:"599$"},
        ]
    },
    sportingGoods: {
        title: "Sporting Goods",
        products: [
            {name: "Basketball Shoes", price:"199$"},
            {name: "Football", price:"35$"},
            {name: "Lakers Shirt", price:"75$"},
        ]
    }
}

const ProductsStore = () => {
    return(
        <>
        <SearchProducts />
        <Products products={ProductsJSON}/>
        </>
    )
}

export default ProductsStore;