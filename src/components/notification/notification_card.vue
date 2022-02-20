<template>
  <div :class="typeClass" :id="notificationId">
    <div>
      <div class="notification__main__header" title="Close">
        {{ title }}
      </div>
      <div class="notification__main__desc">
        {{ desc }}
      </div>
    </div>
    <div class="notification__close" @click="closeNotification">&#x2715;</div>
  </div>
</template>

<style lang="scss">
@import "./notification_card.scss";
</style>
<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";

@Component({})
export default class NotificationCard extends Vue {
  @Prop({ default: "primary", type: String }) type!: string;
  @Prop() title!: string;
  @Prop() desc!: string;
  mode!: string;
  notificationId: string | string = "notId";

  get typeClass(){
    this.mode = this.type;
    const classes = [`notification ${this.mode}`];
    return classes;
  }

  mounted() {
    this.notificationId = "notificationId" + Math.random().toString(16).slice(2);
    (document.getElementById("notId") as HTMLElement).id = this.notificationId;
  }

  closeNotification() {
    (
      document.getElementById(this.notificationId) as HTMLElement
    ).style.display = "none";
  }
}
</script>