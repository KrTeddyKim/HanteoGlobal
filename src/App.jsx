import './App.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Root';
import NotFound from './Components/NotFound';
import ChartApp from './Components/MenuTab/ChartTab/ChartApp';
import WhookApp from './Components/MenuTab/WhookTab/WhookApp';
import EventApp from './Components/MenuTab/EventTab/EventApp';
import NewsApp from './Components/MenuTab/NewsTab/NewsApp';
import StoreApp from './Components/MenuTab/StoreTab/StoreApp';
import ChargeApp from './Components/MenuTab/ChargeTab/ChargeApp';
import Footer from './Components/Footer/Footer';
import BackToTopButton from './Components/Common/MUI/BackToTopButton';

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
        path: "/whook",
        element: <WhookApp/>,
      },
      {
        path: "/event",
        element: <EventApp/>,
      },
      {
        path: "/news",
        element: <NewsApp/>,
      },
      {
        path: "/store",
        element: <StoreApp/>,
      },
      {
        path: "/charge",
        element: <ChargeApp/>,
      },
    ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
      <BackToTopButton />
      <Footer />
    </div>
  );
}
export default App;
