<template>
  <div class="loader"></div>
</template>

<style lang="scss">
@import "./loader.scss";
</style>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";

@Component({})
export default class Loader extends Vue {}
</script>