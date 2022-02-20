<template>
  <button :class="typeClass" :title="title" @click="$emit('click', $event)">
    <slot>{{ title }}</slot>
  </button>
</template>

<style lang='scss'>
@import "./button.scss";
</style>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";
@Component({})
export default class Button extends Vue {
  @Prop({ default: "primary", type: String }) type!: string;
  @Prop() title!: string;
  @Prop({ default: false, type: Boolean }) disabled!: boolean;
  mode!: string;

  get typeClass() {
    this.mode = this.type;
    const classes = [`button-${this.mode}`];
    return classes;
  }
}
</script>