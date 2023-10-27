import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './episode/page'
import { Box, Typography } from "@mui/material";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Image Feed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Box sx={{ display: 'flex', height: '100vh'}}>
          <Box sx={{ margin: 5, flex:1, padding: 2,background:'pink',width: '350px', backgroundColor: '#f1f1f1',position: 'fixed',height: '80%', overflow: 'scroll', border: '1px solid gray'
          }}>
            <Typography variant='h3' sx={{ marginBottom:2}}>Episodes</Typography>
               <Sidebar/>
          </Box>
          <Box sx={{flex:2}}>
            <Box style={{ position: 'relative', display: 'flex', flex: 1, flexDirection: 'column', overflowY: 'auto', overflowX: 'hidden', marginLeft:'450px' }}>
              <main >
                <Box>
                  {children}
                </Box>
              </main>
            </Box>
          </Box>
        </Box>
      </body>
    </html>
  )
}
