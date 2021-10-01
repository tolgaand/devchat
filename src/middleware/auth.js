export default function ({ $githubLoginPopup, store }) {
  const token = localStorage.getItem('token') || ''

  if (!token) return

  $githubLoginPopup(token)
    .then((result) => {
      const user = result.user.reloadUserInfo
      store.commit('user/setUser', user)
    })
    .catch((error) => {
      console.log(error)
      if (error) localStorage.setItem('token', '')
    })
}
