<template>
  <div>
    <label class="r">{{title}}
      <input type="radio" name="radio" :id="text" :checked="checked">
      <span class="rcheckmark"></span>
    </label>
  </div>
</template>
<style lang="scss" >
@import './radiobutton.scss';
</style>
<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";

@Component({})
export default class Radiobutton extends Vue {
  @Prop() title!: string;
  @Prop({default: false, type: Boolean}) checked!: boolean;

}
</script>