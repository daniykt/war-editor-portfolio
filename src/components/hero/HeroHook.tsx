import { motion, steps, type Variants } from 'motion/react'

const hook = 'Your message deserves an edit people actually watch'
const words = hook.split(' ')
const highlightWord = 'watch'
// 'start': o Motion limita 'end' a 99,9% do progresso, então steps(4) parava em 75% do caminho
const fourSteps = steps(4, 'start')
// Mas 'start' já vale 0.25 no progresso 0, e o WAAPI (fill "both") mostra esse valor
// durante o delay do stagger. Forçar 0 no progresso 0: invisível até a vez da palavra.
const stopMotion = (progress: number) => (progress <= 0 ? 0 : fourSteps(progress))

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const word: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: stopMotion } },
}

const highlight: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: [16, 0, 0, -8],
    color: 'var(--color-accent)',
    transition: {
      duration: 1,
      times: [0, 0.4, 0.7, 1],
      ease: stopMotion,
      opacity: { duration: 0.4, ease: stopMotion },
      color: { delay: 0.7, duration: 0 },
    },
  },
}

type HeroHookProps = {
  play: boolean
  onComplete?: () => void
}

export function HeroHook({ play, onComplete }: HeroHookProps) {
  return (
    <motion.h1
      aria-label={hook}
      className="text-display text-primary"
      variants={container}
      initial="hidden"
      animate={play ? 'visible' : 'hidden'}
      onAnimationComplete={(definition) => {
        // Dispara para qualquer variant; só interessa o fim da entrada
        if (definition === 'visible') onComplete?.()
      }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          variants={w === highlightWord ? highlight : word}
          className="mr-[0.25em] inline-block"
        >
          {w}
        </motion.span>
      ))}
    </motion.h1>
  )
}