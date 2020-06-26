<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{ name: 'CRUD' }">crud</router-link>
      <button type="button" @click="doSearch()">search</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import ListMixins from '@/mixins/list'
export default {
  mixins: [ListMixins],
  data: () => ({
    list: [
        {
          id: 1,
          name: "first thing",
          birthday: "09/18",
          status: true,
          isEdit: false,
        },
        {
          id: 3,
          name: "first thing",
          birthday: "09/18",
          status: false,
          isEdit: false,
        },
        {
          id: 4,
          name: "first thing",
          birthday: "09/18",
          status: false,
          isEdit: false,
        },
        {
          id: 5,
          name: "first thing",
          birthday: "09/18",
          status: false,
          isEdit: false,
        },
      ]
  }),
  methods: {
    findNameByID(id) {
      const data = this.list.find(x => x.id === id)
      if (data) {
        return data.name
      } 
      return ''
    }
  },
  mounted(){
    // console.log(this.findNameByID(6))
    // this.callA()
    // this.callB()
    // console.log(this.paginate.perpage)
    this.$bus.on('sign1', res => {
      var data= res
      console.log("bus on")
      console.log(data)
    })
  },
}

</script>

<style lang="stylus" scoped>
// @import '~bootstrap/dist/css/bootstrap.css';
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
