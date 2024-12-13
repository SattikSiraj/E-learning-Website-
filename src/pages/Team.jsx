import { motion } from 'framer-motion';
import TeamMember from '../components/team/TeamMember';
import { teamMembers } from '../data/teamMembers';

function Team() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Meet the talented individuals behind Interactify
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            We're always looking for talented individuals to join our team.
          </p>
          <button className="bg-primary dark:bg-accent text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Team;