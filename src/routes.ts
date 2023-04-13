import AboutMe from "./AboutMe";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import MyProjects from "./MyProjects";

export const routes = [
    {path:'/about', component:AboutMe},
    {path:'/projects', component:MyProjects},
    {path:'/contact', component:Contact},

    {path:'/', component:LandingPage},
    {path:'*', component:LandingPage},
]