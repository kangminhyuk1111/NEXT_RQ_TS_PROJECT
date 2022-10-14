import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient()
  return (
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
  )
}
