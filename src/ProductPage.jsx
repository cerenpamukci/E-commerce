import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPhone, faSearch, faStar, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faAmazon, faAws, faFacebook, faGoogle, faInstagram, faStripe, faTwitter } from '@fortawesome/free-brands-svg-icons';
import productImage1 from "./components/images/productimage1.jpeg"; 
import productImage2 from "./components/images/productimage2.jpeg";
import productPageImage from "./components/images/productpageimage.jpeg"; 
import best1 from "./components/images/bestseller1.jpeg";
import best2 from './components/images/bestseller2.jpeg'; 
import best3 from './components/images/bestseller3.jpeg'; 
import best4 from './components/images/bestseller4.jpeg'; 
import best5 from './components/images/bestseller5.jpeg'; 
import best6 from './components/images/bestseller6.jpeg'; 
import best7 from './components/images/bestseller1.jpeg'; 
import best8 from './components/images/bestseller2.jpeg'; 

const ProductPage = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const images = [productImage1, productImage2];

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="product">
        <header className="product-header bg-gray-900 text-white">
          <div className="flex justify-between items-center p-4 md:p-6">
            <div className="text-lg font-bold">MONOCLE</div>
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

      <div className="product-page p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <img src={images[currentImage]} alt="Product" className="w-full h-auto object-cover" />
            <button onClick={handlePrevious} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 p-2">
              &#10094;
            </button>
            <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 p-2">
              &#10095;
            </button>
            <div className="flex mt-2">
              <img
                src={productImage1}
                alt="Thumbnail 1"
                className={`w-20 h-20 object-cover cursor-pointer ${currentImage === 0 ? 'border-2 border-black' : ''}`}
                onClick={() => setCurrentImage(0)}
              />
              <img
                src={productImage2}
                alt="Thumbnail 2"
                className={`w-20 h-20 object-cover cursor-pointer ml-2 ${currentImage === 1 ? 'border-2 border-black' : ''}`}
                onClick={() => setCurrentImage(1)}
              />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold">Floating Phone</h1>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <span className="ml-2 text-sm">(10 Reviews)</span>
            </div>
            <p className="text-2xl font-semibold mt-4">$1,139.33</p>
            <p className="text-green-600 mt-2">Availability: In Stock</p>
            <p className="text-gray-700 mt-4">
              Met minime Mollie non desert Alamo est sit cliquey dolor do enim est sent.
            </p>
            <div className="flex items-center mt-4">
              <span className="text-gray-700">Color:</span>
              <div className="flex space-x-2 ml-2">
                <span className="w-6 h-6 bg-green-600 rounded-full cursor-pointer"></span>
                <span className="w-6 h-6 bg-blue-600 rounded-full cursor-pointer"></span>
                <span className="w-6 h-6 bg-yellow-600 rounded-full cursor-pointer"></span>
                <span className="w-6 h-6 bg-black rounded-full cursor-pointer"></span>
              </div>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Select Options
            </button>
            <div className="flex items-center mt-4 space-x-4">
              <FontAwesomeIcon icon={faHeart} className="text-gray-600 cursor-pointer" />
              <FontAwesomeIcon icon={faShoppingCart} className="text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex justify-between border-b">
            <button className="pb-2 border-b-2 border-black">Description</button>
            <button className="pb-2 text-gray-600">Additional Information</button>
            <button className="pb-2 text-gray-600">Reviews (0)</button>
          </div>
          <div className="mt-4">
            <p>Here you can add a detailed description of the product.</p>
          </div>
        </div>
      </div>
      <div className="additional-info-section p-6 md:p-12 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src={productPageImage} alt="Additional Info" className="w-full h-auto object-cover" />
          <div>
            <h2 className="text-2xl font-bold">the quick fox jumps over</h2>
            <p className="text-gray-700 mt-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
            <p className="text-gray-700 mt-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
            <p className="text-gray-700 mt-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold">the quick fox jumps over</h2>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-700 flex items-center">
                <span className="mr-2">➤</span>
                the quick fox jumps over the lazy dog
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="mr-2">➤</span>
                the quick fox jumps over the lazy dog
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="mr-2">➤</span>
                the quick fox jumps over the lazy dog
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="mr-2">➤</span>
                the quick fox jumps over the lazy dog
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="mr-2">➤</span>
                the quick fox jumps over the lazy dog
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">the quick fox jumps over</h2>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-700 flex items-center">
                <span className="mr-2">➤</span>
                the quick fox jumps over the lazy dog
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="mr-2">➤</span>
                the quick fox jumps over the lazy dog
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="mr-2">➤</span>
                the quick fox jumps over the lazy dog
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="mr-2">➤</span>
                the quick fox jumps over the lazy dog
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="mr-2">➤</span>
                the quick fox jumps over the lazy dog
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="featured-products p-6 md:p-12 text-center">
            <p className="text-gray-700">BESTSELLER PRODUCTS</p>
          

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                <div className="product-card">
                    <img src={best1} alt="Best 1" className="w-full h-auto" />
                    <h3 className="text-lg font-semibold mt-2">Mono Design</h3>
                    <p className="text-gray-500">English Department</p>
                    <p className="text-gray-900 font-bold">$6.48</p>
                    <div className="flex justify-center mt-2">
                        
                    </div>
                </div>
                <div className="product-card">
                <img src={best2} alt="Best 2" className="w-full h-auto" />
                    <h3 className="text-lg font-semibold mt-2">Mono Design</h3>
                    <p className="text-gray-500">English Department</p>
                    <p className="text-gray-900 font-bold">$6.48</p>
                    <div className="flex justify-center mt-2">
                       
                    </div>
                </div>
                <div className="product-card">
                <img src={best3} alt="Best 3" className="w-full h-auto" />
                    <h3 className="text-lg font-semibold mt-2">Mono Design</h3>
                    <p className="text-gray-500">English Department</p>
                    <p className="text-gray-900 font-bold">$6.48</p>
                    <div className="flex justify-center mt-2">
                       
                    </div>
                </div>
                <div className="product-card">
                <img src={best4} alt="Best 4" className="w-full h-auto" />
                    <h3 className="text-lg font-semibold mt-2">Mono Design</h3>
                    <p className="text-gray-500">English Department</p>
                    <p className="text-gray-900 font-bold">$6.48</p>
                    <div className="flex justify-center mt-2">
                      
                    </div>
                </div>
                <div className="product-card">
                <img src={best5} alt="Best 5" className="w-full h-auto" />
                    <h3 className="text-lg font-semibold mt-2">Mono Design</h3>
                    <p className="text-gray-500">English Department</p>
                    <p className="text-gray-900 font-bold">$6.48</p>
                    <div className="flex justify-center mt-2">
                      
                    </div>
                </div>
                <div className="product-card">
                <img src={best6} alt="Best 6" className="w-full h-auto" />
                    <h3 className="text-lg font-semibold mt-2">Mono Design</h3>
                    <p className="text-gray-500">English Department</p>
                    <p className="text-gray-900 font-bold">$6.48</p>
                    <div className="flex justify-center mt-2">
                       
                    </div>
                </div>
                <div className="product-card">
                <img src={best7} alt="Best 7" className="w-full h-auto" />
                    <h3 className="text-lg font-semibold mt-2">Mono Design</h3>
                    <p className="text-gray-500">English Department</p>
                    <p className="text-gray-900 font-bold">$6.48</p>
                    <div className="flex justify-center mt-2">
                       
                    </div>
                </div>
                <div className="product-card">
                <img src={best8} alt="Best 8" className="w-full h-auto" />
                    <h3 className="text-lg font-semibold mt-2">Mono Design</h3>
                    <p className="text-gray-500">English Department</p>
                    <p className="text-gray-900 font-bold">$6.48</p>
                    <div className="flex justify-center mt-2">
                       
                    </div>
                </div>
            </div>
        </section>
      
        <div className="flex justify-center space-x-6">
          <FontAwesomeIcon icon={faAmazon} size="3x" />
          <FontAwesomeIcon icon={faStripe} size="3x" />
          <FontAwesomeIcon icon={faGoogle} size="3x" />
          <FontAwesomeIcon icon={faAws} size="3x" />
          {/* Diğer iconlar */}
        </div>
     
    </>
  );
};

export default ProductPage;