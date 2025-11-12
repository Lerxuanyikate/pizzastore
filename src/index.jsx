import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';

function Header() {
    return <h1 style={{color: "red", fontSize: "42px", textAlign: "screenLeft"}}> Kate Ler's Pizza </h1>;
}   

function Pizza() {
    return <div>
        <img src="https://fratellisnewyorkpizza.com/wp-content/uploads/2019/07/spinach-pizzacheech.png" alt="Spinach Pizza" height={100}/>
        <h3>Spinach Pizza</h3>
        <p>Tomato, mozarella, spinach, and ricotta cheese</p>
        <p>Quantity: 10</p>
        </div>
};

function Menu() {
    return (
        <div>
            <h2>Our Menu</h2>
            <Pizza/>
            <Pizza/>
            <Pizza/>
            <Pizza/>
        </div>
    )
}

function Footer() {
    const hour = new Date().getHours();
    const isOpen = hour >= 12 && hour <= 22 ? true : false;
    
    return (
        <footer className='footer'>
            {isOpen ? "We're currently open!"  : "Sorry, we're closed now."}
        </footer>
    )
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