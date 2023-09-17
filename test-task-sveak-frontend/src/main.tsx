import { Provider as StoreProvider } from 'react-redux'
import { store } from './store'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider store={store}>
                <App />
            </StoreProvider>
        </BrowserRouter>
    </React.StrictMode>
)
