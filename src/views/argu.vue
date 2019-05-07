<template>
  <div>
    <!--$route代表的是当前路由-->
    {{ $route.params.user}}
  </div>
</template>

<script>
  export default {
    name: 'argu'
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

</style>
