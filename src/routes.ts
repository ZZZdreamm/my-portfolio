import LandingPage from "./LandingPage";

export const routes = [


    {path:'/', component:LandingPage},
    {path:'/portfolio', component:LandingPage},
    {path:'*', component:LandingPage},
]