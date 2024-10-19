import Image from "next/image";
export default function Navbar(){
    return(
        <div>
            <header>
                <nav className="bg-blue-900 h-16 flex items-center justify-between">
                    <div className="flex items-center ml-6">
                    <Image src="/images/logo.png" alt="logo" width={80} height={80} className="ml-4 pt-16"/>
                    <h1 className="text-white ml-20 font-bold font-700 text-2xl">Welcome to Flex Page</h1>
                    </div>
                    <ul className="flex space-x-12 text-white mr-6">
                        <li>Services</li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

