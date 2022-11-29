import React from 'react';
import Header from "../../components/Header";
import {getProviders, signIn} from "next-auth/react";
function Signin({providers}) {
    return (
        <>
            <Header />
            {Object.values(providers).map(provider => (
                <div key={provider.name} className={""}>
                    <img src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" style={{margin:'0 auto'}} width="500" alt="google-logo" />
                    <p>This site is harry`s practice site.</p>
                    <button onClick={() => signIn(provider.id, {callbackUrl:"/"})}>Sign in with {provider.name}</button>
                </div>
            ))}
        </>
    );
}

export default Signin;

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: {providers}
    }
}