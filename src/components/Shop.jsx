import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import product1 from "./images/product1.jpeg"
import product2 from './images/product2.jpeg'; 
import product3 from './images/product3.jpeg'; 
import product4 from './images/product4.jpeg'; 
import product5 from './images/product5.jpeg'; 
import product6 from './images/product6.jpeg'; 
import product7 from './images/product7.jpeg'; 
import product8 from './images/product8.jpeg'; 
import clothImage1 from './images/cloth1.jpeg';
import clothImage2 from './images/cloth2.jpeg';
import clothImage3 from './images/cloth3.jpeg';
import clothImage4 from './images/cloth4.jpeg';
import clothImage5 from './images/cloth5.jpeg';
const Shop = () => {
    return (
        <>
            <div className="shop">
                <header className="shop-header bg-gray-900 text-white">
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
            </div>
            <section className="cloth-section p-6 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center">Shop</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
                    <div className="cloth-card">
                        <img src={clothImage1} alt="Cloth 1" className="w-full h-auto object-cover" />
                        <a href= "/cloths"className="text-center mt-2">CLOTHS</a>
                    </div>
                    <div className="cloth-card">
                        <img src={clothImage2} alt="Cloth 2" className="w-full h-auto object-cover" />
                        <a href= "/cloths"className="text-center mt-2">CLOTHS</a>
                    </div>
                    <div className="cloth-card">
                        <img src={clothImage3} alt="Cloth 3" className="w-full h-auto object-cover" />
                        <a href= "/cloths"className="text-center mt-2">CLOTHS</a>
                    </div>
                    <div className="cloth-card">
                        <img src={clothImage4} alt="Cloth 4" className="w-full h-auto object-cover" />
                        <a href= "/cloths"className="text-center mt-2">CLOTHS</a>
                    </div>
                    <div className="cloth-card">
                        <img src={clothImage5} alt="Cloth 5" className="w-full h-auto object-cover" />
                        <a href= "/cloths"className="text-center mt-2">CLOTHS</a>
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
                        <h3 className="text-lg font-semibold mt-2">Mono Design</h3>
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
                        <h3 className="text-lg font-semibold mt-2">Mono Design</h3>
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
                        <h3 className="text-lg font-semibold mt-2">Mono Design</h3>
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
                        <h3 className="text-lg font-semibold mt-2">Mono Design</h3>
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
                        <h3 className="text-lg font-semibold mt-2">Mono Design</h3>
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
                        <h3 className="text-lg font-semibold mt-2">Mono Design</h3>
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
                        <h3 className="text-lg font-semibold mt-2">Mono Design</h3>
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
                        <h3 className="text-lg font-semibold mt-2">Mono Design</h3>
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
        </>
    );
};

export default Shop;