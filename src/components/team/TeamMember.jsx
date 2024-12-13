import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function TeamMember({ member }) {
  return (
    <motion.div
      className="card text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{member.role}</p>
      <div className="flex justify-center space-x-4">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-accent"
          >
            <FaLinkedin size={24} />
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-accent"
          >
            <FaGithub size={24} />
          </a>
        )}
        {member.twitter && (
          <a
            href={member.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-accent"
          >
            <FaTwitter size={24} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default TeamMember;