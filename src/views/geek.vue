<template>
  <div>
    <p>我是Geek组件</p>
    <p>{{geekId}}</p>
  </div>
</template>

<script>
  export default {
    name: 'geek',
    props: ['id'],
    computed: {
      geekId() {
        return this.id + 'hello world'
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

</style>
