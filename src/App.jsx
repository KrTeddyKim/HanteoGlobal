import './App.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Root';
import NotFound from './Components/NotFound';
import ChartApp from './Components/MenuTab/ChartTab/ChartApp';
import WhookApp from './Components/MenuTab/WhookTab/WhookApp';

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <ChartApp/>,
      },
      {
        path: "/Whook",
        element: <WhookApp/>,
      }
    ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
