import React, { useState, useEffect } from 'react';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const products = {
        1: { name: "Digital Arts", description: "Robb", price: 1926, img: "https://static.vecteezy.com/system/resources/previews/023/574/133/non_2x/fashion-art-portrait-of-beautiful-woman-with-creative-make-up-ai-generative-image-free-photo.jpg" },
        2: { name: "Encounter the nature", description: "Chanshali Bia", price: 1499, img: "https://plus.unsplash.com/premium_photo-1667238544336-17a1cbfd4801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBhaW50aW5nfGVufDB8fDB8fHww" },
        3: { name: "The art from 1786", description: "Leo lewis", price: 99999, img: "https://images.unsplash.com/photo-1583590019972-a146a712d72a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww" },
        4: { name: "Sculpture of Lord Ganesha", description: "Indian arts", price: 12000, img: "https://images.unsplash.com/photo-1508133111629-be3f6e535a52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNjdWxwdHVyZXMlMjBnYW5lc2glMjBtZXRhbHxlbnwwfHwwfHx8MA%3D%3D" },
        5: { name: "Mountains & Hills", description: "Renu Lande", price: 1980, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb3RyYWl0JTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D" },
        6: { name: "Outbreak", description: "Jhon Snow", price: 13000, img: "https://img.artpal.com/481862/82-23-2-26-9-5-28m.jpg" },
        7: { name: "Mini Home Decor Lippan", description: "Arya", price: 2222, img: "https://m.media-amazon.com/images/I/91ulI3MK9LL.jpg" },
        8: { name: "Buddha Oil Painting", description: "Sansa", price: 120, img: "https://images.woodenstreet.de/image/data/da-monica/buddha-oil-paint-art-teakwood-canvas-stretched-and-framed-wall-painting/updated/1.jpg" },
        9: { name: "Deer Gond Painting", description: "Snehal Lande", price: 22229, img: "https://i.etsystatic.com/24774829/r/il/281804/3339768472/il_600x600.3339768472_e7tv.jpg" },
        10: { name: "Avocados", description: "Chanshali Bia", price: 11449, img: "https://cdn.pixabay.com/photo/2018/07/03/03/48/avocados-3513048_960_720.jpg" },
        11:{name: "Modern Abstract Painting", description:"Chanshali Bia", price: 19949, img:"https://i.etsystatic.com/24618956/r/il/6f0334/5067298702/il_570xN.5067298702_318i.jpg" },
        12: {
        name: "Sunset Vibes",
        description: "Artistic",
        price: 8000,
        img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60"
    },
    13: {
        name: "Ocean Dreams",
        description: "Seaside",
        price: 9500,
        img: "https://images.unsplash.com/photo-1515168764331-9f91c2ee5b28?w=500&auto=format&fit=crop&q=60"
    },
    14: {
        name: "Forest Serenity",
        description: "Nature's Gift",
        price: 4500,
        img: "https://images.unsplash.com/photo-1494231218173-93c57e8815c3?w=500&auto=format&fit=crop&q=60"
    },
    15: {
        name: "Vintage Cityscape",
        description: "Urban Art",
        price: 12000,
        img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60"
    },
    16: {
        name: "The Beauty of Night",
        description: "Artist: Aaryana",
        price: 12000,
        img: "https://cdn.pixabay.com/photo/2019/02/14/07/28/painting-3995999_1280.jpg"
    },
    17: {
        name: "Classical Sculpture",
        description: "Artist: Luo li rung",
        price: 1726,
        img: "https://i.pinimg.com/originals/59/a6/ce/59a6ce733f5e266249bf5ad342b517b3.jpg"
    },
    18: {
        name: "Swan Sculpture",
        description: "Artist: Chanshali Bia",
        price: 1499,
        img: "https://www.htohshop.com/cdn/shop/files/CrystalSwanSculpture-Large_700x.jpg?v=1711301358"
    },
    19: {
        name: "Wood Sculpture",
        description: "Artist: Leo Lewis",
        price: 99999,
        img: "https://i.pinimg.com/originals/09/05/b3/0905b34547c156ed7413684b5d9bda97.jpg"
    },
    20: {
        name: "Sculpture of Lord Ganesha",
        description: "Artist: Indian Arts",
        price: 12000,
        img: "https://images.unsplash.com/photo-1508133111629-be3f6e535a52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNjdWxwdHVyZXMlMjBnYW5lc2glMjBtZXRhbHxlbnwwfHwwfHx8MA%3D%3D"
    },
    21: {
        name: "Kinetic Sculpture",
        description: "Artist: Renu Lande",
        price: 1880,
        img: "https://tse1.mm.bing.net/th?id=OIP.e9g2U3H8M3-YTbl0KsB54AHaFj&pid=Api&P=0&h=180"
    },
    22: {
        name: "Minimalist Sculpture",
        description: "Artist: Jhon Snow",
        price: 1000,
        img: "https://media.tate.org.uk/aztate-prd-ew-dg-wgtail-st1-ctr-data/images/.width-340_4VxSRe2.jpg"
    },
    23: {
        name: "Statue",
        description: "Artist: Arya",
        price: 20222,
        img: "http://thewowstyle.com/wp-content/uploads/2015/02/7831e2ec26dfa0a98d74679e538390ccfamous-statues.jpg"
    },
    24: {
        name: "Modern Sculpture",
        description: "Artist: Sansa",
        price: 1120,
        img: "https://mymodernmet.com/wp/wp-content/uploads/2022/06/Daniel-Popper-Ginkgo-HumanNature-The-Morton-Arboretum-1.jpg"
    },
    25: { name: "Thalapaty", description: "Artist: Amala kakkat", price: 14926, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4HidiHuDvdFzgcp0OppbA_8hH9wPYVjRKg&s" },
    26: { name: "The goat life", description: "Artist: Amal kakkat", price: 19499, img: "https://i.pinimg.com/236x/04/4d/cb/044dcb99c46fc180848e826225e0efe9.jpg" },
    27: { name: "khadhi", description: "Artist: Amal kakkat", price: 99999, img: "https://i.pinimg.com/236x/38/46/48/38464864a6fbb479e2f329c845a037ea.jpg" },
    28: { name: "Vikram", description: "Artist: Amal kakkat", price: 12000, img: "https://i.pinimg.com/474x/77/5e/d7/775ed7619801bff94f98c33e08a1e27d.jpg" },
    29: { name: "Rolex", description: "Artist: Amal kakkat", price: 13000, img: "https://i.pinimg.com/236x/5a/c5/4c/5ac54cbd7a6b68034b297f042134d88c.jpg" },
    30: { name: "vijay DevaraKonda", description: "Artist: Amal kakkat", price: 24222, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSI3EOn0BPAKVNEIHUCVZeLvyVvROEIrIP3w&s" },
    31: { name: "Sita Ramam", description: "Artist: Amal kakkat", price: 19120, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6NB8_mxL0GlKrqYVCol1HXcDc6so94GIK-g&s" },
    32: { name: "Kira", description: "Artist: Freepik", price: 12926, img: "https://img.freepik.com/premium-photo/fantasy-beautiful-girl-digital-art-3d-illustration-landscape-wallpaper_579873-4162.jpg" },
    33: { name: "The Nature", description: "Artist: Monad Nomad", price: 11499, img: "https://img.artpal.com/260182/67-23-6-25-0-8-55m.jpg" },
    34: { name: "The future", description: "Artist: Laxvi", price: 99999, img: "https://i.pinimg.com/736x/9c/21/fe/9c21fee25ea7ec191bd336f998a510b3.jpg" },
    35: { name: "Aka", description: "Artist: Graphicvil", price: 12000, img: "https://img.freepik.com/premium-photo/digital-painting-woman-with-blue-orange-light-her-face_759095-16029.jpg" },
    36: { name: "Whale", description: "Artist: Linda", price: 91980, img: "https://c4.wallpaperflare.com/wallpaper/890/812/834/fantasy-art-landscape-whale-sunset-wallpaper-preview.jpg" },
    37: { name: "Mushroom city", description: "Artist: Jhon Reck", price: 13000, img: "https://i.etsystatic.com/42464190/r/il/9a4fba/4792884116/il_570xN.4792884116_p5tc.jpg" },
    38: { name: "Floating Rock", description: "Artist: Arya", price: 22222, img: "https://wallpaperaccess.com/full/1141048.jpg" },
    39: { name: "Magic", description: "Artist: Sansa", price: 12000, img: "https://w0.peakpx.com/wallpaper/288/373/HD-wallpaper-fantasy-girl-forest-voltairis-fairy-fantasy-art-magical-girl.jpg" }
};

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);

        const price = storedCart.reduce((total, id) => {
            const product = products[id];
            return product ? total + product.price : total;
        }, 0);

        setTotalPrice(price);
    }, []);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(itemId => itemId !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);

        // Update total price
        const price = updatedCart.reduce((total, itemId) => {
            const product = products[itemId];
            return product ? total + product.price : total;
        }, 0);
        setTotalPrice(price);
    };

    const clearCart = () => {
        localStorage.removeItem('cart');
        setCart([]);
        setTotalPrice(0);
    };

    const buyNow = () => {
        if (cart.length === 0) {
            alert("Your cart is empty.");
        } else {
            alert("Thank you for your purchase!");
            localStorage.removeItem('cart');
            setCart([]);
            setTotalPrice(0);
        }
    };

    return (
        <div>
            <h1>Your Cart</h1>
            <button className="home-btn" onClick={() => window.location.href = 'App.js'}>Home</button>

            <div id="cartItems">
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map(id => {
                        const product = products[id];
                        if (product) {
                            return (
                                <div className="item" key={id}>
                                    <img src={product.img} alt={product.name} />
                                    <h4>{product.name}</h4>
                                    <p>{product.description}</p>
                                    <p>Price: ₹{product.price}</p>
                                    <button onClick={() => removeFromCart(id)}>Remove</button>
                                </div>
                            );
                        }
                        return null;
                    })
                )}
            </div>

            <div className="total-price-container">
                <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
                <button className="buy-now" onClick={buyNow}>Buy Now</button>
            </div>

            <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;
