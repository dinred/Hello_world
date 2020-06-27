<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{ name: 'CRUD' }">crud</router-link>
      <button type="button" @click="setAToZ()">toZ</button>
      <button type="button" @click="setAToY()">toY</button>
      store.a: {{ storeA }} store.all: {{ storeAll }}
    </div>
    <router-view />
  </div>
</template>

<script>
import ListMixins from "@/mixins/list";
import {ModuleType} from '@/store/modules/module'

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
    ],
  }),
  methods: {
    findNameByID(id) {
      const data = this.list.find((x) => x.id === id);
      if (data) {
        return data.name;
      }
      return "";
    },
    setAToZ() {
      // this.$store.state.a = 'z'
      // this.$store.commit("setAToZ", 1);
      this.$store.commit(ModuleType.setAToZ, 1);
    },
    setAToY() {
      // this.$store.dispatch("setAToY", 2);
      this.$store.dispatch(ModuleType.setAToY, 2);
    },
  },
  computed: {
    storeA() {
      // return this.$store.state.a;
      return this.$store.state.Module.a;
    },
    storeAll() {
      // return this.$store.getters.all;
      return this.$store.getters[ModuleType.moduleAll];
    },
  },
  mounted() {
    // console.log(this.findNameByID(6))
    // this.callA()
    // this.callB()
    // console.log(this.paginate.perpage)
    // this.$bus.on("sign1", (res) => {
    //   //data=JSON.parse(JSON.stringify(res));
      
    //   // const {a,b} =;
    //   console.log(res);
    //   // var data = res;
    //   // console.log("bus on");
    //   // console.log(data.id);

    // });
  },
};
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
