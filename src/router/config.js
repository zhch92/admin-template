import Loadable from 'react-loadable'
const loadable = (filename) => Loadable({
    loader:() => import(`../page/${filename}`),
    loading:() => ('')
});
//路由配置对象
const routers = {
    noLogin: [{
        path:'/*',
        exact:true,
        component:loadable('Login')
    }],
    isLogin:[
    // 首页
      {
        path:'/Index',
        exact:true,
        component:loadable('Index')
      }
    ]
};
export default routers;
