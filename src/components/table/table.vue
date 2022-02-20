<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th v-for="(item, index) in cols" :key="index">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in rows" :key="index">
          <td v-for="col in cols" :key="col">{{ item[col] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang='scss'>
@import "./table.scss";
</style>
<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";
import Component from "vue-class-component";
@Component
export default class Table extends Vue {
  //tableData: [{id: 0, 'name': 'Max', 'lastname': 'Mustermann'}, {...}]
  @Prop() tableData!: any;
  items: any = "";
  search: string = "";
  column: string = "";

  mounted() {
    this.items = this.tableData;
  }

  get cols() {
    return this.items.length >= 1 ? Object.keys(this.items[0]) : [];
  }

  get rows() {
    if (!this.items.length) {
      return [];
    }

    return this.items.filter((item: any) => {
      let props = this.search && this.column ? [item[this.column]] : Object.values(item);
      return props.some(
        (prop) =>
          !this.search ||
          (typeof prop === "string"
            ? prop.includes(this.search)
            : prop.toString(10).includes(this.search))
      );
    });
  }
}
</script>