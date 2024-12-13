import { motion } from 'framer-motion';
import { FaVideo, FaGraduationCap, FaUsers, FaLaptopCode, FaBrain, FaUserGraduate, FaUserFriends, FaCertificate } from 'react-icons/fa';

function WhyUs() {
  const features = [
    {
      icon: <FaVideo size={40} />,
      title: "Live Online Classes",
      description: "Attend interactive live sessions with expert instructors in real-time."
    },
    {
      icon: <FaGraduationCap size={40} />,
      title: "Self-Paced Learning",
      description: "Learn at your own pace with flexible course schedules and deadlines."
    },
    {
      icon: <FaUsers size={40} />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of teaching experience."
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: "Rich Course Content",
      description: "Access comprehensive study materials, videos, and practice tests."
    },
    {
      icon: <FaBrain size={40} />,
      title: "Hands-on Projects",
      description: "Apply your knowledge through practical projects and assignments."
    },
    {
      icon: <FaUserGraduate size={40} />,
      title: "Adaptive Learning",
      description: "Personalized learning paths based on your progress and goals."
    },
    {
      icon: <FaUserFriends size={40} />,
      title: "Study Groups",
      description: "Collaborate with peers in virtual study groups and discussions."
    },
    {
      icon: <FaCertificate size={40} />,
      title: "Certifications",
      description: "Earn industry-recognized certificates upon course completion."
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
          <h1 className="text-4xl font-bold mb-4">Why Choose Interactify</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Your Gateway to Interactive E-Learning Excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-primary dark:text-accent mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <button className="bg-primary dark:bg-accent text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Start Learning Today
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default WhyUs;