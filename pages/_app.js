import Router from 'next/router'
import NProgress from 'nprogress'

// components
import Page from './../components/page'

//styles
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../components/styles/nprogress.css'

// setup progress bars for Ajax chaning between pages.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  pageProps.query = ctx.query
  return { pageProps }
}

export default MyApp
