import Footer from "./Footer/page";
import Navbar from "./Navbar/page"

export default function Home(){
  return(
     <main>
        <Navbar/>
         <div className="flex w-full justify-center mt-6 space-x-4 px-10">
          <div className="bg-red-500 h-60 w-4/12"></div>
          <div className="bg-pink-500 h-60 w-4/12"></div>
          <div className="bg-orange-500 h-60 w-4/12"></div>
          </div>     

             <div className="flex w-full justify-center mt-6 space-x-4 px-10">
              <div className="bg-blue-400 h-60 w-5/12"></div>
              <div className="bg-green-400 h-60 w-5/12"></div>
        </div>
             <Footer/>
       </main>
 )
}



