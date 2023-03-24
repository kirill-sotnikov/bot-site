import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import "./Block.css";

export const Block = ({ children }: PropsWithChildren) => {
  return (
    <>
      <motion.div
        className="motionDiv"
        initial={{ y: 100, x: 100, opacity: 0, scale: 0 }}
        animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.svg width="41" height="41" viewBox="0 0 41 41">
          <motion.circle
            cx="20"
            cy="20"
            r="10"
            fill="none"
            stroke="#4ea4f6"
            strokeWidth="4px"
            transition={{ duration: 10 }}
            initial={{ pathLength: 0, opacity: 0, rotate: 230 }}
            animate={{
              pathLength: 1,
              opacity: 1,
              transition: {
                duration: 1000,
                pathLength: { type: "spring", duration: 4 },
                opacity: { duration: 1 },
              },
            }}
          />
        </motion.svg>
        <div className="block" style={{ marginLeft: 10 }}>
          {children}
        </div>
      </motion.div>
    </>
  );
};

<svg
  width="41"
  height="41"
  viewBox="0 0 41 41"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M41 20.5C41 31.8218 31.8218 41 20.5 41C9.17816 41 0 31.8218 0 20.5C0 9.17816 9.17816 0 20.5 0C31.8218 0 41 9.17816 41 20.5ZM7.98032 20.5C7.98032 27.4144 13.5856 33.0197 20.5 33.0197C27.4144 33.0197 33.0197 27.4144 33.0197 20.5C33.0197 13.5856 27.4144 7.98032 20.5 7.98032C13.5856 7.98032 7.98032 13.5856 7.98032 20.5Z"
    fill="#4EA4F6"
  />
</svg>;
