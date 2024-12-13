import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">The Original</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Creating innovative solutions for tomorrow's challenges.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/team" className="hover:text-primary dark:hover:text-accent">Our Team</a></li>
              <li><a href="/about" className="hover:text-primary dark:hover:text-accent">About Us</a></li>
              <li><a href="/source-code" className="hover:text-primary dark:hover:text-accent">Source Code</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: contact@theoriginal.com</li>
              <li>Phone: 013XXXXXXXX</li>
              <li>Address: Daffodil Smart City, Birulia, Savar, Dhaka, Bangladesh</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
              />
              <button className="w-full bg-primary dark:bg-accent text-white py-2 rounded hover:opacity-90">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 The Original. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;