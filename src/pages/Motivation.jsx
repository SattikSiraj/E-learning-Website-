import { motion } from 'framer-motion';
import { 
  FaLightbulb, 
  FaUsers, 
  FaRocket, 
  FaGraduationCap, 
  FaGlobeAmericas, 
  FaHandHoldingHeart 
} from 'react-icons/fa';

function Motivation() {
  const motivations = [
    {
      icon: <FaLightbulb size={40} />,
      title: "Innovation in Education",
      description: "Revolutionizing traditional learning methods by integrating cutting-edge technology with proven educational practices."
    },
    {
      icon: <FaUsers size={40} />,
      title: "Empowering Communities",
      description: "Creating a platform that brings together learners and educators from diverse backgrounds to share knowledge and experiences."
    },
    {
      icon: <FaRocket size={40} />,
      title: "Future of Learning",
      description: "Building a foundation for the next generation of education technology that adapts to individual learning styles."
    },
    {
      icon: <FaGraduationCap size={40} />,
      title: "Educational Equality",
      description: "Breaking down barriers to quality education by making it accessible and affordable for everyone, everywhere."
    },
    {
      icon: <FaGlobeAmericas size={40} />,
      title: "Global Impact",
      description: "Creating opportunities for learners in underserved regions to access world-class education and improve their lives."
    },
    {
      icon: <FaHandHoldingHeart size={40} />,
      title: "Student Success",
      description: "Dedicated to helping students achieve their dreams through personalized learning paths and continuous support."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">What Drives Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            At Interactify, we're driven by the vision of transforming education through technology. 
            Our motivation stems from the belief that quality education should be accessible to everyone, 
            regardless of their geographical or economic background.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motivations.map((motivation, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-primary dark:text-accent mb-4">
                {motivation.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{motivation.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{motivation.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Together, we can create a world where quality education knows no boundaries. 
            Whether you're a student, educator, or institution, be part of this educational revolution.
          </p>
          <button className="bg-primary dark:bg-accent text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Start Learning Today
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Motivation;