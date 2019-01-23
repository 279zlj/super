// import {mount,createLocalVue} from '@vue/test-utils'
import Vue from 'vue'
// import App from '@/App'
// import Login from '@/components/Login'
// import vuerouter from 'vue-router'
// import index from '@/components/index'
// import router from '@/router/index'
import Rosd from '@/components/Rosd'


describe('Rosd.vue', () => {
  it('it is Rosd ', () => {
    // const router=new vuerouter({router})
    // const wrapper=mount(App,{localvue,router})
    const Constructor=Vue.extend(Rosd)
    const vm=new Constructor().$mount()
    // vm.user='user'
    // vm.pwd='123'
    const button=vm.$el.querySelector('#node1')
    const clickevent=new window.Event('click')
    button.dispatchEvent(clickevent)
    // $router.push("/index")
    // expect(wrapper.find('div').exists()).toBe(true)
    // expect(vm.user.textContent).to.equal('user')
    expect(vm.$el.querySelector('#net').textContent).to.equal('192.168.5.21')
  //   const $route={path:'/'}
  //   const wrapper=mount(Login,{
  //     mocks:{
  //       $route
  //     }
  //   })
  //   expect(wrapper.vm.$route.path).toBe($route.path)
  })

})
