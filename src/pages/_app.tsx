import { ThemeProvider, useTheme } from "@/Context/ThemeContext";
import { CartProvider } from "@/Context/CartContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  
  function AppWrapper({ Component, pageProps, router }: AppProps){
    const {theme} = useTheme()
    useEffect(()=>{
      if(theme ==='dark'){
        document.body.classList.add('dark')
      }else{
        document.body.classList.remove('dark')
      }
    }, [theme])

    return <Component {...pageProps}/>
  }

  return(
    <ThemeProvider>
      <CartProvider>
        <AppWrapper Component={Component} pageProps={pageProps} router={pageProps.router}/>
      </CartProvider>
    </ThemeProvider>
  )
}
