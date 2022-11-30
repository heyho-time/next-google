import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react"
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid"
import User from "./User"

function SearchHeader(props) {
  const router = useRouter()
  const searchInputRef = useRef(null)

  return (
    <header className={"styicky top-0 bg-white"}>
      <div className={"flex w-full items-center"}>
        <Image
          onClick={() => router.push("/")}
          src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
          width={"120"}
          height={"40"}
          className="w-60 cursor-pointer"
          alt="google-logo"
        />
        <form
          className={
            "flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl"
          }
        >
          <input
            type={"text"}
            defaultValue={router.query.term}
            ref={searchInputRef}
            className={"w-full focus:outline-none"}
          />
          <XIcon className={"w-7 text-gray-500 cursor-pointer sm:mr-3"} />
          <MicrophoneIcon
            className={"w-6 hidden sm:inline-flex text-blue-500"}
          />
          <SearchIcon className={"h-6 hidden sm:inline-flex text-blue-500"} />
        </form>
        <User className={"ml-auto whitespace-nowrap"} />
      </div>
    </header>
  )
}

export default SearchHeader
