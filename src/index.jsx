import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';

function Header() {
    return <h1 style={{color: "red", fontSize: "42px", textAlign: "screenLeft"}}> Kate Ler's Pizza </h1>;
}   

function Pizza( {
    name, ingredients, price, photoName
}) {
    return <div className='pizza'>
        <img src={photoName} alt={name} height={100}/>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>{price}</p>
    </div>
    
};

function Menu() {
    const pizzaData = [
            {
                name: "Spinach", 
                ingredients: "Tomato, Mozzarella, Spinach", 
                price: 10, 
                photoName: "pizza/spinach.png"
            },
            {
                name: "Pepperoni", 
                ingredients: "Tomato, Mozzarella, Pepperoni", 
                price: 12, 
                photoName: ""
            },
            {
                name: "Hawaiian", 
                ingredients: "Tomato, Mozzarella, Ham, Pineapple", 
                price: 12, 
                photoName: "https://example.com/hawaiian.jpg"
            },
            {
                name: "Veggie", 
                ingredients: "Tomato, Mozzarella, Bell Peppers, Olives, Onions", 
                price: 9, 
                photoName: "https://example.com/veggie.jpg"
            },
        ];
        return (
            <div className="menu">
                <h2>Our Menu</h2>
                <div className="pizzas">
                    {
                    pizzaData.map(pizza => (
                        <Pizza 
                            key={pizza.name}
                            {...pizza}
                        />
                    ))
                    }
                </div>
            </div>
        )
    }

function Footer() {
    const hour = new Date().getHours();
    const isOpen = hour >= 12 && hour <= 22 ? true : false;
    
    return (
        <footer className='footer'>
            {isOpen ? (
                <div className="order">
                <p>We're currently open!</p>
                <button className='btn'>Order Now</button>
                </div>
            ) : (
                <p>Sorry, we're closed now.</p>
            )}
        </footer>
    );
}

function App() {
    return(
    <div className='container'>
        <Header/>
        <Menu/>
        <Footer/>
    </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);