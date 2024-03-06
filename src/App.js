import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HabitDetails from './Pages/HabitDetails';

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: 'habits/:id', element: <HabitDetails/>}
  ])
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    
  );
}

export default App;
