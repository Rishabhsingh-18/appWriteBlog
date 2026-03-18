import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* LOGO */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">BlogApp</h2>
          <p className="text-sm">
            Build and share your thoughts with the world 🚀
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Affiliate</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Customer Support</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <span className="hover:text-white cursor-pointer">🌐</span>
            <span className="hover:text-white cursor-pointer">🐦</span>
            <span className="hover:text-white cursor-pointer">📸</span>
            <span className="hover:text-white cursor-pointer">💼</span>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} BlogApp. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;