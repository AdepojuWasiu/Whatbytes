'use client'
import "./globals.css";
import NavBar from "@/components/navigation/navBar";
import Header from "@/components/layout/header";
import { DataProvider } from "@/context/context";

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <DataProvider>
              <Header />
                <main className='flex'> 
                <NavBar />
                <div >
                  {children}
                </div>
                </main>
          </DataProvider>
        </body>

       
    </html>
  
  )
}

export default RootLayout
