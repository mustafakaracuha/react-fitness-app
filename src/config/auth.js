import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";


export const emailLogin = async (setLoading,setErr,email,password,navigate) => {
  setLoading(true);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    localStorage.setItem("user", JSON.stringify(user));
    setTimeout(() => {
      setLoading(false);
      setErr("");
    }, 2000);
    navigate("/home")
  } catch (error) {
    const errorCode = error.code;
    setErr(
      errorCode === "auth/wrong-password"
        ? "Wrong password"
        : "" || errorCode === "auth/user-not-found"
        ? "User not found"
        : "" || errorCode === "auth/invalid-email"
        ? "Invalid email"
        : errorCode
    );
    setLoading(false);
  }
};

export const createUser = async (setLoading,setErr,email,password,navigate) => {
  setLoading(true);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
    setTimeout(() => {
      setLoading(false);
      setErr("Registration Successfull");
    }, 2000);
     navigate("/")
  } catch (error) {
    const errorCode = error.code;
    setErr(
      errorCode === "auth/email-already-in-use"
        ? "Email already exists"
        : errorCode
    );
    setLoading(false);
  }
};


export const googleLogin = async (setLoading, setErr,navigate) => {
  const provider = new GoogleAuthProvider();
  setLoading(true);
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
    setTimeout(() => {
      setLoading(false);
      setErr("");
    }, 2000);
  } catch (error) {
    const errorCode = error.code;
    setErr(
      errorCode === "auth/popup-closed-by-user"
        ? "Popup closed by user"
        : "" || errorCode === "auth/account-exists-with-different-credential"
        ? "Account exists with different credential"
        : ""
    );
    setLoading(false);
  }
};

export const twitterLogin = async (setLoading, setErr,navigate) => {
  const provider = new TwitterAuthProvider();
  setLoading(true);
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
    setTimeout(() => {
      setLoading(false);
      setErr("");
    }, 2000);
  } catch (error) {
    const errorCode = error.code;
    setErr(
      errorCode === "auth/popup-closed-by-user"
        ? "Popup closed by user"
        : "" || errorCode === "auth/account-exists-with-different-credential"
        ? "Account exists with different credential"
        : ""
    );
    setLoading(false);
  }
};

export const githubLogin = async (setLoading, setErr,navigate) => {
  const provider = new GithubAuthProvider();
  setLoading(true);
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    navigate("/home");
    localStorage.setItem("user", JSON.stringify(user));
    setTimeout(() => {
      setLoading(false);
      setErr("");
    }, 2000);
  } catch (error) {
    const errorCode = error.code;
    setErr(
      errorCode === "auth/popup-closed-by-user"
        ? "Popup closed by user"
        : "" || errorCode === "auth/account-exists-with-different-credential"
        ? "Account exists with different credential"
        : ""
    );
    setLoading(false);
  }
};

