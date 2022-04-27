import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/account',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.demo.system.moduleName'),
  },
  children: [
    // {
    //   path: 'account',
    //   name: 'AccountManagement',
    //   meta: {
    //     title: t('routes.demo.system.account'),
    //     ignoreKeepAlive: false,
    //   },
    //   component: () => import('/@/views/demo/system/account/index.vue'),
    // },
    // {
    //   path: 'account_detail/:id',
    //   name: 'AccountDetail',
    //   meta: {
    //     hideMenu: true,
    //     title: t('routes.demo.system.account_detail'),
    //     ignoreKeepAlive: true,
    //     showMenu: false,
    //     currentActiveMenu: '/system/account',
    //   },
    //   component: () => import('/@/views/demo/system/account/AccountDetail.vue'),
    // },
    {
      path: 'user',
      name: 'UserManagement',
      meta: {
        title: t('routes.demo.system.user'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/demo/system/user/index.vue'),
    },
    {
      path: 'user_detail/:id',
      name: 'UserDetail',
      meta: {
        hideMenu: true,
        title: t('routes.demo.system.user_detail'),
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/system/user',
      },
      component: () => import('/@/views/demo/system/user/UserDetail.vue'),
    },
    // {
    //   path: 'role',
    //   name: 'RoleManagement',
    //   meta: {
    //     title: t('routes.demo.system.role'), 
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/demo/system/role/index.vue'),
    // },
    {
      path: 'menu',
      name: 'menu',
      meta: {
        title: t('routes.demo.system.menu'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/menu/index.vue'),
    },
    // {
    //   path: 'dept',
    //   name: 'DeptManagement',
    //   meta: {
    //     title: t('routes.demo.system.dept'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/demo/system/dept/index.vue'),
    // },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      meta: {
        title: t('routes.demo.system.password'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/password/index.vue'),
    }
  ],
};

export default system;
