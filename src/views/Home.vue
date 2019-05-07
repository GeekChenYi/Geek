<template>
  <div class="home">
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">push跳转</button>
    <button @click="handleClick('replace')">replace替换</button>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    methods: {
      // this.$router.push(),这个方法会想history栈添加一个新的记录，所以但用户点击浏览器后退按钮的时，则回到之前的路由
      // router-link其实在内部默默的也是在调用this.$router.push()方法
      // push()方法的参数可以是一个字符串，对象，命名路由，带查询参数的
      handleClick(type) {
        if (type === 'back') {
          this.$router.back()
        } else if (type === 'push') {
          const user = 'geekChenYi'
          this.$router.push({

            // name: 'argu',
            /*params: { // 这个配合name属性是做动态路由跳转，我们也可以不通过这种方式，通过模板语法实现
              user: '123345'
            },*/

            // path: `/argu/${user}`

            // 下面的这种办法是不会生效的,要想这样使用，可以通过name，而不能通过path
            path: '/argu',
            params:{
              user: '12345'
            }
            /*query:{
              plan:'private'
            }*/
          }) // 也可以通过name的方式进行跳转
        } else if (type === 'replace') {
          this.$router.replace({
            path: 'parent',
            /*query: {
              name: 'geek'
            }*/
          })
        }
      }
    }
  }
</script>
