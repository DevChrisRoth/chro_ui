<template>
  <div class="skeleton"></div>
</template>

<style lang="scss">
@import "./skeleton.scss";
</style>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";

@Component({})
export default class Skeleton extends Vue {}
</script>