import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md items-center">
        <div className="flex items-center space-x-2">
            <Image
                alt="logo"
                width={30}
                height={30}
                src="/images/logo.png"
            />
            <div>
                <h1 className="font-bold">
                DEV·HUZAIF <span className="text-violet-500">AI</span> Image Generator 
                </h1>
                <h2 className="text-xs">Powered by DALL·E 2 & Chat GPT</h2>
            </div>
        </div>

        <div className="flex divide-x text-gray-500 items-center text-xs md:text-base">
            <Link
                href="https://dev-huzaif.netlify.app"
                className="px-2 font-light text-right cursor-pointer"
            >
                Portfolio
            </Link>

            <Link 
                href="https://github.com/huzaifali835"
                className="px-2 font-light cursor-pointer"
            >
                GitHub Account
            </Link>
        </div>
    </header>
  )
}

export default Header