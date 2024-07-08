import { createBrowserRouter } from "react-router-dom";
import { CoreLayoyt, HomePage, NotFoundPage, TodoShowPage } from ".";

export const router = createBrowserRouter([
  {
    path: '',
    element: <CoreLayoyt />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/todo/:id',
        element: <TodoShowPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  }
]);
