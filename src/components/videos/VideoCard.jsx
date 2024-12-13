import { motion } from 'framer-motion';
import { getYouTubeId } from '../../utils/videoUtils';

function VideoCard({ title, description, videoUrl, callToAction }) {
  const videoId = getYouTubeId(videoUrl);

  return (
    <motion.div
      className="card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative pb-[56.25%] h-0">
        {videoId && (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        {callToAction && (
          <a
            href={callToAction.url}
            className="inline-block bg-primary dark:bg-accent text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            {callToAction.text}
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default VideoCard;