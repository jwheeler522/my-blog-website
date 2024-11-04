<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';

const StatsGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      {children.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg"
        >
          <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
          <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

=======
import React from 'react';
import { motion } from 'framer-motion';

const StatsGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      {children.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg"
        >
          <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
          <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

>>>>>>> 1b1e9e5396a10c00e925cce370ac6724f53e72c3
export default StatsGrid; 