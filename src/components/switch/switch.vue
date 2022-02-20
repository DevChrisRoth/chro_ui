<template>
  <div>
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label>
  </div>
</template>
<style lang="scss" >
@import "./switch.scss";
</style>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";

@Component({})
export default class Switch extends Vue {
}
</script>