import { motion } from 'framer-motion';
import { 
  FaFlag, 
  FaBullseye, 
  FaChartLine, 
  FaRocket, 
  FaHandshake, 
  FaUserGraduate, 
  FaGlobe, 
  FaMobileAlt
} from 'react-icons/fa';

function Objective() {
  const objectives = [
    {
      icon: <FaFlag size={40} />,
      title: "Our Mission",
      description: "To revolutionize education through an innovative e-learning platform that makes quality education accessible to everyone, everywhere."
    },
    {
      icon: <FaBullseye size={40} />,
      title: "Core Goals",
      description: "Create an engaging, interactive learning environment that adapts to individual learning styles and pace."
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Growth Vision",
      description: "Become the leading e-learning platform by continuously evolving with emerging technologies and educational needs."
    },
    {
      icon: <FaRocket size={40} />,
      title: "Innovation Focus",
      description: "Pioneering AI-driven personalized learning paths and real-time analytics to optimize student success rates."
    },
    {
      icon: <FaHandshake size={40} />,
      title: "Industry Integration",
      description: "Partner with leading companies to provide real-world projects and direct job placement opportunities."
    },
    {
      icon: <FaUserGraduate size={40} />,
      title: "Student Success",
      description: "Achieve 90% course completion rate through engaging content and comprehensive support systems."
    },
    {
      icon: <FaGlobe size={40} />,
      title: "Global Impact",
      description: "Break geographical barriers with multilingual support and culturally diverse content accessibility."
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "Accessibility",
      description: "Enable learning anywhere, anytime with our mobile-first approach and offline learning capabilities."
    }
  ];

  const uniqueFeatures = [
    {
      title: "What Makes Us Different",
      points: [
        "AI-Powered Personalization",
        "Interactive Live Sessions",
        "Industry Expert Mentorship",
        "Real-world Project Experience",
        "Adaptive Learning Paths",
        "24/7 Learning Support"
      ]
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
          <h1 className="text-4xl font-bold mb-4">Our Objectives</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Interactify was created to transform online education by combining cutting-edge technology 
            with proven pedagogical methods, making learning more engaging, effective, and accessible than ever before.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-primary dark:text-accent mb-4">
                {objective.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{objective.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{objective.description}</p>
            </motion.div>
          ))}
        </div>

        {uniqueFeatures.map((section, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.points.map((point, pointIndex) => (
                <div 
                  key={pointIndex}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm"
                >
                  <p className="font-semibold text-primary dark:text-accent">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <button className="bg-primary dark:bg-accent text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Join Our Learning Community
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Objective;