export default {
  name: 'App',
}
<template>
  <div id="app">
    <router-view name="topheader"></router-view>
    <router-view name="sidebar"></router-view>
    <main>
          <router-view/>          
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
*, ::after, ::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
  font-family: 'Plus Jakarta Sans';
}

</style>
