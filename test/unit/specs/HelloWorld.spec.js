import {mount,createLocalVue} from '@vue/test-utils'
import Vue from 'vue'
import App from '@/App'
import Login from '@/components/Login'
import vuerouter from 'vue-router'
import index from '@/components/index'
import router from '@/router/index'
import Error from '@/components/Error'

const localvue=createLocalVue()
localvue.use(vuerouter)


describe('Error.vue', () => {
  it('it is login ', () => {
    // const router=new vuerouter({router})
    // const wrapper=mount(App,{localvue,router})
    const Constructor=Vue.extend(Error)
    const vm=new Constructor().$mount()
    // vm.user='user'
    // vm.pwd='123'
    // const button=vm.$el.querySelector('#loginbtn')
    // const clickevent=new window.Event('click')
    // button.dispatchEvent(clickevent)
    // router.push("/index")
    // expect(wrapper.find(index).exists()).toBe(true)
    // expect(vm.user.textContent).to.equal('user')
    expect(vm.$el.querySelector('.h1').textContent).to.equal('abxc')
  })

})
