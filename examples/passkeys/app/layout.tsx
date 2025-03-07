import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Img from 'next/image'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Safe Tutorial: Passkeys',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem'
          }}
        >
          <a href='https://safe.global'>
            <Img width={95} height={36} alt='safe-logo' src='/safe.svg' />
          </a>
          <div style={{ display: 'flex' }}>
            <a
              href='https://docs.safe.global/home/passkeys-tutorials/safe-passkeys-tutorial'
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '1rem'
              }}
            >
              Read tutorial{' '}
              <Img
                width={20}
                height={20}
                alt='link-icon'
                src='/external-link.svg'
                style={{ marginLeft: '0.5rem' }}
              />
            </a>
            <a
              href='https://github.com/5afe/safe-passkeys-tutorial'
              style={{ display: 'flex', alignItems: 'center' }}
            >
              View on GitHub{' '}
              <Img
                width={24}
                height={24}
                alt='github-icon'
                src='/github.svg'
                style={{ marginLeft: '0.5rem' }}
              />
            </a>
          </div>
        </nav>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <h1>Passkeys tutorial</h1>

          <div>Create a new 4337 compatible Safe Account using passkeys</div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginLeft: '40px',
            marginRight: '40px'
          }}
        >
          {children}
        </div>
      </body>
    </html>
  )
}
