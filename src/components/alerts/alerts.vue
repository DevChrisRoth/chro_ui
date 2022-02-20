<template>
  <div :class="typeClass" :title="title">
    <slot>{{ title }}</slot>
  </div>
</template>
<style lang="scss" >
@import "./alerts.scss";
</style>
<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";

@Component({})
export default class Alert extends Vue {
  @Prop({ default: "primary", type: String }) type!: string;
  @Prop() title!: string;
  mode!: string;


  get typeClass(){
    this.mode = this.type;
    const classes = [`alert ${this.mode}`];
    return classes;
  }
}
</script>