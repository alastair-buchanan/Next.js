import type {AppProps} from 'next/app'
import {Hydrate, QueryClient, QueryClientProvider} from "react-query"
import React, {ReactElement, ReactNode} from "react";
import {NextPage} from "next";

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
    }

function MyApp({Component, pageProps}: AppPropsWithLayout) {
    const [queryClient] = React.useState(() => new QueryClient());
    const getLayout = Component.getLayout ?? ((page) => page)

    return getLayout (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
            </Hydrate>
        </QueryClientProvider>
    )
}

export default MyApp
