import React from "react";
import { Container } from "./styles";
import { motion } from "framer-motion";

export const ModalOverlay: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Container>
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          transition: {
            duration: 0.5,
          },
        }}
        exit={{
          scale: 0,
        }}
      >
        {children}
      </motion.div>
    </Container>
  );
};
