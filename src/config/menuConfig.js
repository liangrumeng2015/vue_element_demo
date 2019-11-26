/**
 * 页面上的一些固定的数据
 * 
 * @param   title标题
 * @param  icon图标
 * @param  id唯一标识
 * @param  path跳转路由路径
 * @param  children二级菜单栏
 * 
 */
const menuList = [{
    title: '用户管理',
    icon: 'el-icon-user',
    id: 100,
    path: '',
    children: [{
      title: '用户列表',
      icon: 'el-icon-user',
      id: 101,
      path: '/userslist'
    }]
  },
  {
    title: '权限管理',
    icon: 'el-icon-unlock',
    id: 200,
    path: '',
    children: [{
        title: '角色列表',
        icon: 'el-icon-notebook-2',
        id: 201,
        path: '/roleslist'
      },
      {
        title: '权限列表',
        icon: 'el-icon-key',
        id: 202,
        path: '/rightslist'
      }
    ]
  },
  {
    title: '商品管理',
    icon: 'el-icon-box',
    id: 300,
    path: '',
    children: [{
        title: '商品列表',
        icon: 'el-icon-suitcase-1',
        id: 301,
        path: '/productslist'
      },
      {
        title: '分类参数',
        icon: 'el-icon-receiving',
        id: 302,
        path: ''
      },
      {
        title: '商品分类',
        icon: 'el-icon-collection',
        id: 303,
        path: ''
      }
    ]
  },
  {
    title: '订单管理',
    icon: 'el-icon-document',
    id: 400,
    path: '',
    children: []
  },
  {
    title: '数据统计',
    icon: 'el-icon-postcard',
    id: 500,
    path: '',
    children: []
  }
]

export default menuList;
