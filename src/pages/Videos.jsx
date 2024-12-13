import { motion } from 'framer-motion';
import VideoCard from '../components/videos/VideoCard';
import { videos } from '../data/videos';

function Videos() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Featured Videos</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Watch and learn about our products and services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              description={video.description}
              videoUrl={video.videoUrl}
              callToAction={video.callToAction}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Subscribe to our channel for the latest updates and tutorials.
          </p>
          <a
            href="https://youtube.com/@interactify"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
          >
            Subscribe to Our Channel
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Videos;