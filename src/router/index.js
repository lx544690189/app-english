import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'//底部+顶部 导航框架
import home from '@/page/home'//首页
import lecture from '@/page/lecture'//课程
import teacher from '@/page/teacher'//老师
import usercenter from '@/page/usercenter'//用户中心
/**二级页面 */
import lecture_detail from '@/page/lecture-detail'//课程详情介绍
import teacher_detail from '@/page/teacher-detail'//教师详情
import teacher_quickOrder from '@/page/teacher-quickOrder'//快速预约教师

/**三级页面 */
import lecture_detail_online from '@/page/lecture-detail-online'//在线课堂

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: index,
      children: [{
        path: 'home',
        component: home
      }, {
        path: 'lecture',
        component: lecture
      }, {
        path: 'teacher',
        component: teacher
      }, {
        path: 'usercenter',
        component: usercenter
      }]
    },
    {
      path: '/lecture/detail',
      component: lecture_detail
    },{
      path: '/teacher/detail',
      component: teacher_detail
    },
    {
      path: '/lecture/detail/online',
      component: lecture_detail_online
    },
    {
      path: '/lecture/teacher/quickOrder',
      component: teacher_quickOrder
    }
  ]
})
