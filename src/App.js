//importing dependencies
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HabitDetails from './Pages/HabitDetails';

function App() {
  //creating router pages
  const router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: 'habits/:id', element: <HabitDetails/>}
  ])

  return (
    //store provider
    <Provider store={store}>
      {/*router provider*/ }
      <RouterProvider router={router}/>
    </Provider>
    
  );
}

export default App;
