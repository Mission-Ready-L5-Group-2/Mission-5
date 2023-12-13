//React Router Imports
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

//Page Imports
import Home from './pages/farhan/Home'
import RootLayout from './sharedcomponents/RootLayout';


//Context Imports


//Loader imports




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<RootLayout />}>
      <Route index element={<Home />} />
      {/* Add other pages in here once tasks allocated */}
    </Route>
  )

)



function App() {

    return <RouterProvider router={router} />;
  
}

export default App