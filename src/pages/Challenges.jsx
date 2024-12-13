import { motion } from 'framer-motion';
import { 
  FaPuzzlePiece, 
  FaClock, 
  FaShieldAlt, 
  FaGlobe, 
  FaUserFriends, 
  FaServer 
} from 'react-icons/fa';

function Challenges() {
  const challenges = [
    {
      icon: <FaPuzzlePiece size={40} />,
      title: "Technical Complexity",
      description: "Building a scalable and interactive learning platform that can handle thousands of concurrent users.",
      solution: "Implemented microservices architecture and WebSocket technology for real-time interactions."
    },
    {
      icon: <FaClock size={40} />,
      title: "Time Management",
      description: "Coordinating development across multiple teams while meeting tight deadlines.",
      solution: "Adopted Agile methodology with two-week sprints and daily stand-ups."
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Security",
      description: "Protecting user data and intellectual property while maintaining easy access.",
      solution: "Implemented end-to-end encryption and multi-factor authentication."
    },
    {
      icon: <FaGlobe size={40} />,
      title: "Global Accessibility",
      description: "Ensuring platform accessibility across different regions with varying internet speeds.",
      solution: "Developed progressive web app with offline capabilities and CDN integration."
    },
    {
      icon: <FaUserFriends size={40} />,
      title: "User Engagement",
      description: "Creating an engaging learning experience that keeps students motivated.",
      solution: "Implemented gamification elements and social learning features."
    },
    {
      icon: <FaServer size={40} />,
      title: "Infrastructure Scaling",
      description: "Managing growing user base while maintaining performance and reliability.",
      solution: "Utilized cloud-native architecture with auto-scaling capabilities."
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
          <h1 className="text-4xl font-bold mb-4">Challenges & Solutions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Key challenges we faced while building Interactify and how we overcame them
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-primary dark:text-accent mb-4">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{challenge.description}</p>
              <div className="border-t pt-4">
                <p className="text-sm font-semibold text-primary dark:text-accent">Solution:</p>
                <p className="text-gray-600 dark:text-gray-400">{challenge.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Through persistence and innovation, we've transformed these challenges into opportunities for growth.
          </p>
          <button className="bg-primary dark:bg-accent text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Learn More About Our Journey
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Challenges;