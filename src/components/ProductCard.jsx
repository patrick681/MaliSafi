import "./ProductSection.css";
export default function ProductCard({ name, price, image }) {
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>$Kes {price}</p>
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">buy now</button>
        </div>
    );
}