import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Detail from './components/Detail';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'character/:charicId',
                element: <Detail />,
            },
        ],
        errorElement: <NotFound />,
    },
]);

export default router;
