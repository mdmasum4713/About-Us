const Footer = () => {
    return (
        <div className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-col sm:flex-row items-start justify-between">
                    {/* Left Side: Sign-Up Section */}
                    <div className="flex flex-col mb-6 sm:mb-0 sm:w-1/5 items-start">
                        <p className="text-2xl font-semibold mb-1">Receive an exclusive</p>
                        <p className="text-2xl font-semibold mb-1">20% discount code</p>
                        <p className="text-2xl font-semibold mb-1">when you signup.</p>
                    </div>

                    {/* Second Column: Email Input Section */}
                    <div className="flex flex-col mb-6 sm:mb-0 sm:w-1/5 items-start">
                        <p className="text-lg mb-2">Enter your email</p>
                        <div className="relative w-52 mb-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded-md bg-gray-900 text-white placeholder-white w-full text-center outline-none"
                            />
                            <a
                                href="#"
                                className="absolute right-0 top-0 h-full px-4 bg-black text-white rounded-md flex items-center justify-center ml-8"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>

                    {/* Third Column: Company Links */}
                    <div className="flex flex-col mb-6 sm:mb-0 sm:w-1/5 items-center text-center">
                        <h4 className="font-semibold mb-2">Company</h4>
                        <ul className="space-y-1">
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Store Locator</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    {/* Fourth Column: Customer Care Links */}
                    <div className="flex flex-col mb-6 sm:mb-0 sm:w-1/5 items-center text-center">
                        <h4 className="font-semibold mb-2">Customer Care</h4>
                        <ul className="space-y-1">
                            <li>Size Guide</li>
                            <li>Help & FAQs</li>
                            <li>Return My Order</li>
                            <li>Refer a Friend</li>
                        </ul>
                    </div>

                    {/* Fifth Column: Follow Us Links */}
                    <div className="flex flex-col mb-6 sm:mb-0 sm:w-1/5 items-center text-center">
                        <h4 className="font-semibold mb-2">Follow Us</h4>
                        <ul className="space-y-1">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Pinterest</li>
                            <li>TikTok</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
