<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <el-button>默认按钮</el-button>
    <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')"
      >Open Modal</b-button
    >

    <b-modal id="bv-modal-example" @ok="callA()">
      <template v-slot:modal-title>
        Using <code>$bvModal</code> Methods
      </template>
      <div class="d-block text-center">
        <h3>Hello From This Modal!</h3>
      </div>
      <img src="/resource/main.png" />
      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
        >Close Me</b-button
      >
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button } from "element-ui";
export default {
  name: "Home",
  components: {
    "ele-button": Button,
  },
  data: () => ({
    list: [],
  }),
  
};
</script>
