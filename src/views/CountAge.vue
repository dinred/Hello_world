<template>
  <div>
    {{ result }}
  </div>
</template>

<script>
export default {
  data: () => ({
    result: 0,
  }),
  methods: {
    getRandAge() {
      return Math.floor(Math.random() * 90) + 10;
    },
    countTotalAge(datas) {
      //   datas.map((x) => {
      //     x.age = this.getRandAge();
      //     return x;
      //   });
      return datas.reduce((result, x) => {
        return result + (x.age > 50 ? x.age * 2 : x.age);
        // return result + x.age
      }, 0);
    },
  },
  async mounted() {
    const res = await axios.get("/resource/users.json");
    this.result = this.countTotalAge(res.data);

    const arr = [1,2,3,4,5,6,7,8,9,10]
    var sum = {}
    for(var i = 0; i<arr.length;i++) {
        // sum += arr[i]
        sum[arr[i]] = arr[i]
    }       
    console.log(sum)
    // var total = 0;
    // // this.$bus.emit('sign1', "can u see me")
    // this.list = res.data;
    // for (var i = 0; i < this.list.length; i++) {
    //   var rand = Math.floor(Math.random() * 90) + 10;
    //   // console.log("bus res")
    //   //   console.log(rand);
    //   // var i =list[i].age;
    //   //   console.log(this.list[i].age);
    //   if (rand > 50) {
    //     this.list[i].age = rand * 2;
    //     total += this.list[i].age;
    //   } else {
    //     this.list[i].age = rand;
    //     total += this.list[i].age;
    //   }
    // }
    // // console.log("bus emit");
    // // console.log(this.list);
    // // console.log("total");
    // // console.log(total);
    // this.result = total;
    // // this.$bus.emit("sign1",this.list);
  },
};
</script>
