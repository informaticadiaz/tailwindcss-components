import App from '../App'
import NavBar from '../components/NavBar';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/nav',
    element: <NavBar />,
  },
];

export default routes;