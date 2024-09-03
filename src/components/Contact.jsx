import React from 'react';
import contactphoto from "./images/contact.jpeg";

const Contact = () => {
    return (
        <div className="relative w-full h-screen">
            <img src={contactphoto} alt="Contact" className="w-full h-full object-cover" />
            
            <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row justify-between items-center md:items-start p-6 md:p-12">
                <div className="text-white md:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-bold">CONTACT US</h2>
                    <p className="mt-4">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                    <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded">CONTACT US</button>
                </div>
                <div className="text-white mt-6 md:mt-0 md:w-1/2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-bold">Paris</h3>
                            <p className="mt-2">1901 Thorn ridge Cir.</p>
                            <p>75000 Paris</p>
                            <p className="mt-2">Phone: +451 215 215</p>
                            <p>Fax: +451 215 215</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">New York</h3>
                            <p className="mt-2">2715 Ash Dr. San Jose,</p>
                            <p>75000 Paris</p>
                            <p className="mt-2">Phone: +451 215 215</p>
                            <p>Fax: +451 215 215</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Berlin</h3>
                            <p className="mt-2">4140 Parker Rd.</p>
                            <p>75000 Paris</p>
                            <p className="mt-2">Phone: +451 215 215</p>
                            <p>Fax: +451 215 215</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">London</h3>
                            <p className="mt-2">3517 W. Gray St. Utica,</p>
                            <p>75000 Paris</p>
                            <p className="mt-2">Phone: +451 215 215</p>
                            <p>Fax: +451 215 215</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;