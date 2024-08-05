'use client';

import { computePosition, flip, offset, shift } from '@floating-ui/react';

import { AnimatePresence, Variants, motion } from 'framer-motion';
import {
  FC,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react';

const tooltipAnimation: Variants = {
  visible: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.1 }
  },
  hidden: {
    opacity: 0,
    translateY: '4px',
    transition: { duration: 0.1 }
  }
};

interface Props {
  content: ReactNode;
}

const Tooltip: FC<PropsWithChildren<Props>> = ({ children, content }) => {
  const [hovered, setHovered] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hovered) return;

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    computePosition(divRef.current!, tooltipRef.current!, {
      placement: 'bottom',
      middleware: [offset(16), flip(), shift({ padding: 16 })]
    }).then(({ x, y }) => {
      Object.assign(tooltipRef.current!.style, {
        top: `${y}px`,
        left: `${x}px`
      });
    });
  }, [hovered]);

  return (
    <>
      <div
        ref={divRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </div>
      <AnimatePresence>
        {hovered ? (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={tooltipAnimation}
            ref={tooltipRef}
            className="absolute left-[-9999px] top-[-9999px] z-10 !m-0 w-max select-none rounded-md border border-border bg-background-hover px-2 py-1 text-paragraph-xs font-medium text-foreground"
          >
            {content}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Tooltip;
