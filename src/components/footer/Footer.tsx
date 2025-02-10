import { VscSend } from "react-icons/vsc";
import { RiFacebookLine } from "react-icons/ri";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import app from "../../assets/images/app.png";
import google from "../../assets/images/google.png";
import code from "../../assets/images/Qrcode .png";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1440px] mx-auto bg-black text-white p-14 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Exclusive */}
        <div>
          <h2 className="text-xl font-semibold">Exclusive</h2>
          <p className="mt-2">Subscribe</p>
          <p className="text-sm text-gray-400">Get 10% off your first order</p>
          <div className="relative flex items-center mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full bg-black text-white border border-gray-600 rounded pr-10"
            />
            <VscSend className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer" />
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold">Support</h2>
          <p className="mt-2 text-sm">111 Bijoy sarani, Dhaka, Bangladesh</p>
          <p className="text-sm">exclusive@gmail.com</p>
          <p className="text-sm">+88016-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h2 className="text-lg font-semibold">Account</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold">Quick Link</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h2 className="text-lg font-semibold">Download App</h2>
          <p className="text-sm text-gray-400">
            Save $3 with App New User Only
          </p>
          <div className="mt-2 flex items-center space-x-2">
            <img src={code} alt="QR Code" className="w-14 h-14" />
            <div className="space-y-2">
              <img src={google} alt="Google Play" className="w-24" />
              <img src={app} alt="App Store" className="w-24" />
            </div>
          </div>
          {/* Social Icons */}
          <div className="mt-4 flex space-x-4 text-xl">
            <RiFacebookLine className="cursor-pointer hover:text-gray-400" />
            <FaTwitter className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
