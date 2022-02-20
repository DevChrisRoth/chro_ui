<template>
  <input
    class="input"
    :placeholder="placeholder"
    :readonly="readonly"
    :required="required"
    :title="title"
    :type="inputType"
    v-model="result"
    :autocomplete="autocomplete"
    :min="min"
    :max="max"
    :maxlength="maxlength"
    :disabled="disabled"
  />
</template>

<style lang='scss'>
@import "./inputfield.scss";
</style>
<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";

@Component({})
export default class Input extends Vue {
  @Prop({ type: Boolean, default: false }) disabled!: boolean;
  @Prop({ default: "text", type: String }) inputType!: string;
  @Prop() placeholder!: string;
  @Prop() title!: string;
  @Prop() min!: number | string;
  @Prop() max!: number | string;
  @Prop() maxlength!: number | string;
  @Prop({ default: false }) readonly!: boolean;
  @Prop({ default: false }) required!: boolean;
  @Prop({ default: "off", type: String }) autocomplete!: string;
  value!: string | number;

  get result(): string | number {
    return this.value;
  }

  set result(value: string | number) {
    this.result = value;
    if (!this.disabled) this.$emit("on-change", this.result);
  }
}
</script>