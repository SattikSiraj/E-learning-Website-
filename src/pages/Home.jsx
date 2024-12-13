import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaChartLine, FaShieldAlt, FaGraduationCap, FaLaptopCode, FaBook, FaCertificate } from 'react-icons/fa';

function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: <FaCode size={40} />,
      title: "Excellence in Software",
      description: "Crafting exceptional software solutions with cutting-edge technologies"
    },
    {
      icon: <FaUsers size={40} />,
      title: "Collaborative Team",
      description: "Working together to deliver outstanding results"
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Continuous Growth",
      description: "Constantly evolving and improving our skills"
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Data Protection",
      description: "Ensuring the highest level of security for your data"
    }
  ];

  const productFeatures = [
    {
      icon: <FaGraduationCap size={40} />,
      title: "Interactive Learning",
      description: "Engage with our interactive courses designed by industry experts",
      link: "https://interactify-tawny.vercel.app/courses"
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: "Hands-on Practice",
      description: "Apply your knowledge with real-world projects and coding exercises",
      link: "https://interactify-tawny.vercel.app/projects"
    },
    {
      icon: <FaBook size={40} />,
      title: "Comprehensive Library",
      description: "Access our vast library of learning resources and documentation",
      link: "https://interactify-tawny.vercel.app/resources"
    },
    {
      icon: <FaCertificate size={40} />,
      title: "Certification Path",
      description: "Earn industry-recognized certificates upon course completion",
      link: "https://interactify-tawny.vercel.app/certificates"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-primary to-accent text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <motion.h1 
              className="text-5xl font-bold mb-6"
              {...fadeIn}
            >
              Welcome to Interactify
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              Building the future of software development education
            </motion.p>
            <motion.a 
              href="https://interactify-tawny.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              Visit Our Platform
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Our Features</h2>
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
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Our E-Learning Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
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
                <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
                <a
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-accent hover:underline inline-block"
                >
                  Learn More →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;