<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{ name: 'CountAge' }">CountAge</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    mounted() {
      // console.log(this.findNameByID(6))
      // this.callA()
      // this.callB()
      // console.log(this.paginate.perpage)
      this.$bus.on("sign1", (res) => {
        var newData = JSON.parse(JSON.stringify(res));

        //   const {a,b} =;
        console.log("newData");
        console.log(newData);
        //   var data = res;
        //   console.log("bus on");
        //   console.log(data.id);
      });
    },
  },
};
</script>
