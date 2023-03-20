import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Fragment } from 'react'
import HomePages from '@/pages/home'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
      <HomePages />
    </Fragment>
  )
}
