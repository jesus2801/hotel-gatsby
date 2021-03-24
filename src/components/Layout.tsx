import * as React from "react"
import Header from "./Header"
import Helmet from "react-helmet";
import {Global, css} from '@emotion/react';
import { LayoutProps } from "../interfaces"

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta httpEquiv="content-type" content="text/html" charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"
        />
        <meta name="description" content="af" />
        <meta name="keywords" content="df" />
        <meta name="author" content="Jesús García" />
        <meta name="copyright" content="Jesús García" />
        <meta name="og:type" content="website" />
        <meta name="og:type" content="website" />
        <meta name="og:type" content="website" />
        <meta name="og:title" content={title} />
        <meta name="og:locale" content="en_US" />
        <meta name="og:description" content="asdf" />
      </Helmet>
      <Header />
      {children}
    </>
  )
}

export default Layout
