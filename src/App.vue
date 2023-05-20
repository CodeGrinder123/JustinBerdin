<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {},
  data(){
    return{
      open: false,
    }
  },

  methods: {
    toggle(){
      this.open = !this.open;
    }
  }
}
</script>

<style>
</style>
