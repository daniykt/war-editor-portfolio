import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Styleguide } from '@/components/Styleguide'

function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6">
      <motion.h1
        className="text-display text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        War Editor
      </motion.h1>

      <Button onClick={() => console.log('shadcn ok')}>Testar botão</Button>
      <Styleguide />
    </main>
  )
}

export default App