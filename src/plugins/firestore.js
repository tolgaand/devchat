import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithCredential,
  signOut,
} from 'firebase/auth'

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
}

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)

const auth = getAuth()

/* github login */
async function githubLoginPopup(token) {
  let provider = null

  if (!token) provider = new GithubAuthProvider()
  else {
    const credential = GithubAuthProvider.credential(token)
    return await signInWithCredential(auth, credential)
  }

  const result = await signInWithPopup(auth, provider)
  const credential = GithubAuthProvider.credentialFromResult(result)
  const userToken = credential.accessToken
  const user = result.user.reloadUserInfo

  return { token: userToken, user }
}

/* github logout */
async function githubLogout() {
  return await signOut(auth)
}

export default (context, inject) => {
  inject('firebase', firebase)
  inject('githubLoginPopup', githubLoginPopup)
  inject('githubLogout', githubLogout)
}
