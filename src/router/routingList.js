import AllLaunches from "../components/alllaunches/";
import LandingPage from "../components/landingPage/";

export const routes = [
    { path: '/', component: LandingPage },
    { path: '/launches/:type(upcoming|previous)', component: AllLaunches }
];