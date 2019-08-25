import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Login',
            components: {
                default: () =>
                    import ('./views/Login')
            }
        },
        {
            path: '/index',
            name: 'index',
            components: {
                content: () =>
                    import ('./views/Home/index')
            }
        },
        {
            path: '/physical',
            name: 'physical',
            components: {
                content: () =>
                    import ('./views/physical/physical')
            }
        },
        {
            path: '/overview',
            name: 'overview',
            components: {
                content: () =>
                    import ('./views/storage_mgr/overview/overview')
            },
        },
        {
            path: '/osdmgr',
            name: 'osdmgr',
            components: {
                content: () =>
                    import ('./views/storage_mgr/osd/osdmgr')
            }
        },
        {
            path: '/fsview',
            name: 'fsview',
            components: {
                content: () =>
                    import ('./views/storage_mgr/filesystem/fsview')
            }
        },
        {
            path: '/objview',
            name: 'objview',
            components: {
                content: () =>
                    import ('./views/storage_mgr/object/objview')
            }
        },
        {
            path: '/cluster',
            name: 'cluster',
            components: {
                content: () =>
                    import ('./views/operation/cluster/cluster')
            }
        },
        {
            path: '/capacity',
            name: 'capacity',
            components: {
                content: () =>
                    import ('./views/operation/capacity/expend')
            }
        },
        {
            path: '/diskmgr',
            name: 'diskmgr',
            components: {
                content: () =>
                    import ('./views/operation/osddisk/diskmgr')
            }
        }
    ]
})