import { motion } from 'framer-motion';
import { FaHistory, FaAward, FaHandshake } from 'react-icons/fa';

function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Learn more about our journey and values
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-primary dark:text-accent mb-4">
              <FaHistory size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our History</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Founded with a vision to revolutionize software development through innovation and excellence.
            </p>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-primary dark:text-accent mb-4">
              <FaAward size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Achievements</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Recognized for our outstanding contributions to the software development industry.
            </p>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-primary dark:text-accent mb-4">
              <FaHandshake size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Values</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Built on the foundations of integrity, innovation, and client satisfaction.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            We'd love to hear from you and discuss how we can help with your next project.
          </p>
          <button className="bg-primary dark:bg-accent text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default About;