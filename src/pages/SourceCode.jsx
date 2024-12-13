import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaBook } from 'react-icons/fa';

function SourceCode() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Source Code</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Explore our codebase and documentation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-primary dark:text-accent mb-4">
              <FaGithub size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Repository</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Access our GitHub repository and contribute to our projects.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary dark:bg-accent text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              View Repository
            </a>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-primary dark:text-accent mb-4">
              <FaCode size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Code Examples</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Browse through our code examples and implementations.
            </p>
            <a
              href="#"
              className="inline-block bg-primary dark:bg-accent text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              View Examples
            </a>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-primary dark:text-accent mb-4">
              <FaBook size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Documentation</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Read our comprehensive documentation and guides.
            </p>
            <a
              href="#"
              className="inline-block bg-primary dark:bg-accent text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              View Docs
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SourceCode;