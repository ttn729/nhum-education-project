import { Parsing } from '@/components/Parsing'
import { Typography } from '@mui/material'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <Typography variant='h1'>Muffin iuuuuuuuuuuu</Typography>
      <Typography variant='h2'>Nếu anh không phiền, làm người yêu em đi </Typography>

      <Parsing/>
      
    </main>
  )
}
