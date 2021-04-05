import AllLaunches from "../components/alllaunches/";
import LandingPage from "../components/landingPage/";
import Launch from '../components/launches';

export const routes = [
    { path: '/', component: LandingPage },
    { path: '/launches/:type(upcoming|previous)', component: AllLaunches },
    {path:'/launch/:slug',component :Launch}
];