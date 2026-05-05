
import { motion } from 'framer-motion';

const SectionHeading = ({ children, description, align = "center", className = "" }) => {
  const isLeft = align === "left";

  return (
    <div className={`${isLeft ? 'text-left' : 'text-center'} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        className="inline-block relative mb-4"
      >
         <h2 className="font-display-lg text-3xl xs:text-4xl md:text-display-lg font-bold text-primary leading-tight">
          {children}
        </h2>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
          className={`absolute -bottom-2 left-0 w-full h-1 bg-primary/10 rounded-full ${isLeft ? 'origin-left' : 'origin-center'}`}
        />
      </motion.div>

      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`text-secondary font-body-md max-w-2xl ${isLeft ? '' : 'mx-auto'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
