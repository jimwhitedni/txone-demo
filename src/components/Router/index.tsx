import { useRoutes } from 'react-router-dom'
import getRoutes from './getRoutes'

export default function Router() {
  const routes = getRoutes()
  return useRoutes(routes)
}
