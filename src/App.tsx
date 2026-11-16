import { MotionConfig } from 'motion/react'                    
import { Hero } from '@/components/hero/Hero'

function App() {
  return (
    <MotionConfig reducedMotion="user">                         
      <main>
        <Hero />
      </main>
    </MotionConfig>                                             
  )
}

export default App