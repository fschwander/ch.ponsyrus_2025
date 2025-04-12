import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.tsx'
import './App.scss'

const App = () => <RouterProvider router={router} />

export default App
