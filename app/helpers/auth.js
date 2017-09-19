export default function auth() {
  return new Promise ((resolve, reject ) => {
    setTimeout(() => {
      resolve({
        name: 'Juan',
        avatar: 'https://avatars1.githubusercontent.com/u/3671049?v=4&s=460',
        uid: 'juanportillo',
      })
    }, 2000)
  })
}
