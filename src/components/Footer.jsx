import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-100 p-6 md:p-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Company Info</h3>
                        <ul className="text-gray-600">
                            <li><a href="/about" className="hover:underline">About Us</a></li>
                            <li><a href="/carrier" className="hover:underline">Carrier</a></li>
                            <li><a href="/hiring" className="hover:underline">We are hiring</a></li>
                            <li><a href="/blog" className="hover:underline">Blog</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Legal</h3>
                        <ul className="text-gray-600">
                            <li><a href="/about" className="hover:underline">About Us</a></li>
                            <li><a href="/carrier" className="hover:underline">Carrier</a></li>
                            <li><a href="/hiring" className="hover:underline">We are hiring</a></li>
                            <li><a href="/blog" className="hover:underline">Blog</a></li>
                        </ul>
                    </div>

                    {/* Features */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Features</h3>
                        <ul className="text-gray-600">
                            <li><a href="/marketing" className="hover:underline">Business Marketing</a></li>
                            <li><a href="/analytics" className="hover:underline">User Analytic</a></li>
                            <li><a href="/chat" className="hover:underline">Live Chat</a></li>
                            <li><a href="/support" className="hover:underline">Unlimited Support</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Resources</h3>
                        <ul className="text-gray-600">
                            <li><a href="/ios" className="hover:underline">iOS & Android</a></li>
                            <li><a href="/demo" className="hover:underline">Watch a Demo</a></li>
                            <li><a href="/customers" className="hover:underline">Customers</a></li>
                            <li><a href="/api" className="hover:underline">API</a></li>
                        </ul>
                    </div>

                    {/* Get In Touch */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
                        <form>
                            <input type="email" placeholder="Your Email" className="p-2 w-full border border-gray-300 rounded mb-2" />
                            <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Subscribe</button>
                        </form>
                    </div>
                </div>
                
                <div className="mt-8 border-t border-gray-300 pt-4 text-center">
                    <div className="flex justify-center space-x-4 mb-4">
                        <a href="#" className="text-gray-600 hover:text-gray-900"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#" className="text-gray-600 hover:text-gray-900"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#" className="text-gray-600 hover:text-gray-900"><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                    <p className="text-gray-500">Made With Love By Turkey All Right Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;