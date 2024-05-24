import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from "../firebase";

export default function Login() {
    const googleLogin = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)

    }
  return (
    <>
        <button
        className='btn-login'
        onClick={googleLogin}
        >
            <i className="fa-brands fa-google"></i>
            Iniciar Sesion
        </button>
    </>
  )
}
