import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { TodoProvider, router } from './providers'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoProvider>
    <Suspense fallback="loading ...">
      <RouterProvider router={router} />
    </Suspense>
    </TodoProvider>
  </React.StrictMode>,
)
