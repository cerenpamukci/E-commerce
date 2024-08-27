import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSearch, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import headerImageDesktop from './images/header.jpg'; 
import headerImageMobile from './images/header-mobile.jpg'; 
import menImage from "./images/man.jpeg";
import womenImage from './images/women.jpeg'; 
import accessoriesImage from "./images/accesories.jpeg";
import kidsImage from './images/kids.jpeg'; 
import product1 from "./images/product1.jpeg"
import product2 from './images/product2.jpeg'; 
import product3 from './images/product3.jpeg'; 
import product4 from './images/product4.jpeg'; 
import product5 from './images/product5.jpeg'; 
import product6 from './images/product6.jpeg'; 
import product7 from './images/product7.jpeg'; 
import product8 from './images/product8.jpeg'; 

const Homepage = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [headerImageDesktop, headerImageMobile]; 

    const handleNext = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    return (
        <div className="homepage">
            <header className="homepage-header bg-gray-900 text-white">
                <div className="flex justify-between items-center p-4 md:p-6">
                    <div className="text-lg font-bold">
                        MONOCLE
                    </div>
                    <div className="md:hidden">
                        <FontAwesomeIcon icon={faCartShopping} className="mr-4" />
                        <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
                        <FontAwesomeIcon icon={faPhone} className="mr-4" />
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <a href="/" className="hover:text-gray-400">Home</a>
                        <a href="/shop" className="hover:text-gray-400">Shop</a>
                        <a href="/about" className="hover:text-gray-400">About</a>
                        <a href="/blog" className="hover:text-gray-400">Blog</a>
                        <a href="/contact" className="hover:text-gray-400">Contact</a>
                        <a href="/pages" className="hover:text-gray-400">Pages</a>
                    </nav>
                    <div className="flex space-x-4">
                        <FontAwesomeIcon icon={faSearch} />
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                </div>
                <div className="header-top-bar">
                    <div className="flex justify-between items-center p-4 md:p-6">
                        <span><FontAwesomeIcon icon={faPhone} /> (362) 555-55 55</span>
                        <span><FontAwesomeIcon icon={faEnvelope} /> monocle@gmail.com</span>
                    </div>
                    <div className="header-social-media flex space-x-4">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
            </header>

            <section className="homepage-hero relative">
                <img 
                    src={images[currentImage]} 
                    alt="New Collection" 
                    className="hidden md:block w-full h-auto" 
                    style={{ width: "1440px", height: "852px" }}
                />
                <button 
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900 text-white p-2"
                    onClick={handlePrevious}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button 
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 text-white p-2"
                    onClick={handleNext}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                    <p className="text-sm uppercase">Summer 2020</p>
                    <h1 className="text-3xl md:text-5xl font-bold my-4">New Collection</h1>
                    <p className="text-lg mb-4">
                        We know how large objects will act, but things on a small scale.
                    </p>
                    <a href="/shop" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Shop Now
                    </a>
                </div>
            </section>

            <section className="homepage-editor-pick p-6 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold">Editor's Pick</h2>
                <p className="text-gray-700">Problems trying to resolve the conflict between</p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                    <div className="category-card">
                        <img src={menImage} alt="Men" className="w-full h-auto" />
                        <h3 className="text-xl font-semibold mt-2">MEN</h3>
                    </div>
                    <div className="category-card">
                        <img src={womenImage} alt="Women" className="w-full h-auto" />
                        <h3 className="text-xl font-semibold mt-2">WOMEN</h3>
                    </div>
                    <div className="category-card">
                        <img src={accessoriesImage} alt="Accessories" className="w-full h-auto" />
                        <h3 className="text-xl font-semibold mt-2">ACCESSORIES</h3>
                    </div>
                    <div className="category-card">
                        <img src={kidsImage} alt="Kids" className="w-full h-auto" />
                        <h3 className="text-xl font-semibold mt-2">KIDS</h3>
                    </div>
                </div>
            </section>

            <section className="featured-products p-6 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
                <p className="text-gray-700">BESTSELLER PRODUCTS</p>
                <p className="text-gray-500 mt-2">Problems trying to resolve the conflict between</p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                    <div className="product-card">
                        <img src={product1} alt="Product 1" className="w-full h-auto" />
                        <h3 className="text-lg font-semibold mt-2">Graphic Design</h3>
                        <p className="text-gray-500">English Department</p>
                        <p className="text-gray-900 font-bold">$16.48 - $24.48</p>
                        <div className="flex justify-center mt-2">
                            <span className="text-yellow-500">●</span>
                            <span className="text-blue-500">●</span>
                            <span className="text-green-500">●</span>
                            <span className="text-white-500">●</span>
                            <span className="text-black-500">●</span>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src={product2} alt="Product 2" className="w-full h-auto" />
                        <h3 className="text-lg font-semibold mt-2">Graphic Design</h3>
                        <p className="text-gray-500">English Department</p>
                        <p className="text-gray-900 font-bold">$16.48 - $24.48</p>
                        <div className="flex justify-center mt-2">
                        <span className="text-yellow-500">●</span>
                            <span className="text-blue-500">●</span>
                            <span className="text-green-500">●</span>
                            <span className="text-white-500">●</span>
                            <span className="text-black-500">●</span>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src={product3} alt="Product 3" className="w-full h-auto" />
                        <h3 className="text-lg font-semibold mt-2">Graphic Design</h3>
                        <p className="text-gray-500">English Department</p>
                        <p className="text-gray-900 font-bold">$16.48 - $24.48</p>
                        <div className="flex justify-center mt-2">
                        <span className="text-yellow-500">●</span>
                            <span className="text-blue-500">●</span>
                            <span className="text-green-500">●</span>
                            <span className="text-white-500">●</span>
                            <span className="text-black-500">●</span>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src={product4} alt="Product 4" className="w-full h-auto" />
                        <h3 className="text-lg font-semibold mt-2">Graphic Design</h3>
                        <p className="text-gray-500">English Department</p>
                        <p className="text-gray-900 font-bold">$16.48 - $24.48</p>
                        <div className="flex justify-center mt-2">
                        <span className="text-yellow-500">●</span>
                            <span className="text-blue-500">●</span>
                            <span className="text-green-500">●</span>
                            <span className="text-white-500">●</span>
                            <span className="text-black-500">●</span>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src={product5} alt="Product 5" className="w-full h-auto" />
                        <h3 className="text-lg font-semibold mt-2">Graphic Design</h3>
                        <p className="text-gray-500">English Department</p>
                        <p className="text-gray-900 font-bold">$16.48 - $24.48</p>
                        <div className="flex justify-center mt-2">
                        <span className="text-yellow-500">●</span>
                            <span className="text-blue-500">●</span>
                            <span className="text-green-500">●</span>
                            <span className="text-white-500">●</span>
                            <span className="text-black-500">●</span>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src={product6} alt="Product 6" className="w-full h-auto" />
                        <h3 className="text-lg font-semibold mt-2">Graphic Design</h3>
                        <p className="text-gray-500">English Department</p>
                        <p className="text-gray-900 font-bold">$16.48 - $24.48</p>
                        <div className="flex justify-center mt-2">
                        <span className="text-yellow-500">●</span>
                            <span className="text-blue-500">●</span>
                            <span className="text-green-500">●</span>
                            <span className="text-white-500">●</span>
                            <span className="text-black-500">●</span>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src={product7} alt="Product 7" className="w-full h-auto" />
                        <h3 className="text-lg font-semibold mt-2">Graphic Design</h3>
                        <p className="text-gray-500">English Department</p>
                        <p className="text-gray-900 font-bold">$16.48 - $24.48</p>
                        <div className="flex justify-center mt-2">
                        <span className="text-yellow-500">●</span>
                            <span className="text-blue-500">●</span>
                            <span className="text-green-500">●</span>
                            <span className="text-white-500">●</span>
                            <span className="text-black-500">●</span>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src={product8} alt="Product 8" className="w-full h-auto" />
                        <h3 className="text-lg font-semibold mt-2">Graphic Design</h3>
                        <p className="text-gray-500">English Department</p>
                        <p className="text-gray-900 font-bold">$16.48 - $24.48</p>
                        <div className="flex justify-center mt-2">
                        <span className="text-yellow-500">●</span>
                            <span className="text-blue-500">●</span>
                            <span className="text-green-500">●</span>
                            <span className="text-white-500">●</span>
                            <span className="text-black-500">●</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;