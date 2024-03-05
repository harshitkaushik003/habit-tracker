import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Home/>}
  ])
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    
  );
}

export default App;
