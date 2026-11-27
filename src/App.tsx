import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'                    
import { Hero } from '@/components/hero/Hero'

function App() {
  return (
    <MotionConfig reducedMotion="user">                         
      <LazyMotion features={domAnimation} strict>
        <main>
          <Hero />
        </main>
      </LazyMotion>
    </MotionConfig>                                             
  )
}

export default App