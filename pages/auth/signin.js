import React from "react"
import Header from "../../components/Header"
import { getProviders, signIn } from "next-auth/react"
function Signin({ providers }) {
  return (
    <>
      <Header />
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className={"flex flex-col items-center"}>
          <img
            src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
            className="w-60 object-cover "
            alt="google-logo"
          />
          <p className={"text-sm italic text-center my-10"}>This site is harry`s practice site.</p>
          <button
            className={"bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"}
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export default Signin

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
