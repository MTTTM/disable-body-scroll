import Index from "../pages/index"
import SimpePage from "../pages/simple"
import HorizontalScreen from "../pages/horizontalScreen1"
import HorizontalScreen2 from "../pages/horizontalScreen2"
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
  }, {
    path: "/HorizontalScreen2",
    component: HorizontalScreen2,
    title: "HorizontalScreen roate -90"
  }

]

