<template>
  <div>
    <div class="dropdown">
      <button class="dropbtn">
        <div id="myDropdown" class="dropdown-content">
          <div v-for="(item, index) in dData" :key="index">
            <div v-if="item.clickevent" @click="$emit('click', $event)">
              <i :class="item.icon" />
              {{ item.title }}
            </div>
            <a v-if="item.link" :href="item.link">
              <i :class="item.icon" />
              {{ item.title }}</a>
          </div>
        </div>
        {{ title }}
        <i class="bi bi-chevron-down" />
      </button>
    </div>
  </div>
</template>

<style lang='scss'>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");
@import "./dropdown.scss";
</style>
<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";

@Component({})
export default class Dropdown extends Vue {
  @Prop() title!: string;
  @Prop() dData: any | any = [
    {
      link: "http://localhost:8080",
      title: "Dummy 1",
      clickevent: "",
      icon: "bi bi-chevron-up",
    },
    { link: "http://localhost:8080", title: "Dummy 2" },
  ];
}
</script>