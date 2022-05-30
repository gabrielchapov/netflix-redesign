import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    // The AuthProvider wrapper gives access to 
    // the hook in all levels of the app
    // HOC (High order Component)
    <RecoilRoot>
    <AuthProvider>
  <Component {...pageProps} />
  </AuthProvider>
  </RecoilRoot>
  )
}

export default MyApp
