import React from "react"
import { wrapper } from "../redux/store/store"

const MyApp = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default wrapper.withRedux(MyApp);