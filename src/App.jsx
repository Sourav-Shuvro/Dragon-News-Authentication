import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/routes'

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
// https://dragon-news-c025f.web.app/ 
export default App
