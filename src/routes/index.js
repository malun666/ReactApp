import Main from '../view/Main';
import About from '../view/About';
import Stu from '../view/Stu';

export const routes = [
  {
    path: '/home/main',
    component: Main,
    exact: true
  }, {
    path: '/home/about',
    component: About,
    exact: false
  }, {
    path: '/home/stu',
    component: Stu,
    exact: false
  }
]
