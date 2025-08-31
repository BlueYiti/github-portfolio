"use client"; // needed if you’re using framer-motion in Next.js App Router

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectCard({ title, description, link }: Project) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-500 hover:underline"
      >
        View Project
      </a>
    </motion.div>
  );
}
