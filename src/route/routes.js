import Index from "../pages/index"
import SimpePage from "../pages/simple"
import HorizontalScreen from "../pages/horizontalScreen1"
export default [
  {
    path: '/',
    redirect: '/home',
    title: "home"
  },
  {
    path: '/home', component: Index,
    title: "home"
  },

  {
    path: "/simpe", component: SimpePage,

    title: "simple"
  }, {
    path: "/HorizontalScreen",
    component: HorizontalScreen,
    title: "HorizontalScreen roate 90"
  }

]

