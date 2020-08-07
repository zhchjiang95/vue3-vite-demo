import router from '../router/router.js'

export default () => {
  const routes = router.getRoutes()
  const navList = routes.map(v => ({ title: v.meta.title, path: v.path }))
  return navList
}