import "./ProductSection.css";
import ProductCard from "./ProductCard";    
import samba from "../assets/images/samba.jpg"
import newbalance from "../assets/images/newbalance.jpg"
import airforce from "../assets/images/airforce.jpg";

const products = [
    { id: 1, name: "Samba", price: 1000, image: samba },
    { id: 2, name: "New balance 1000", price: 1000, image: newbalance },
    { id: 3, name: "air force", price: 1000, image: airforce },
];

export default function ProductSection() { 
    return (
        <section className="products">
            {products.map((product)=>(<ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
            />
            ))}
        </section>
    )
}