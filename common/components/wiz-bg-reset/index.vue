<template>
  <div
    class="wiz-bg-reset"
    :class="{ active}"
    @click="onClick"
  >
    <wiz-image
      class="icon"
      :src="currentIcon"
    ></wiz-image>
  </div>
</template>

<script>
//import wizImage from 'wiz-image';

import icon from './media/images/icon.png';
import activeIcon from './media/images/active-icon.png';

export default {
  name: 'wiz-bg-reset',
  components: {
    /*wizImage,*/
  },
  props: {
    componentName: {
      type: String,
      default: 'SmPC Button',
    },
    icon: {
      type: String,
      default: icon,
    },
    activeIcon: {
      type: String,
      default: activeIcon,
    },
    activeOnSlide: {
      type: String,
      default: ''
    },
    selector: {
      type: String,
      default: ''
    }
  },
  computed: {
    active(){
      return this.$navigator.getCurrentSlide().slide === this.activeOnSlide
    },
    currentIcon() {
      return this.active ? this.activeIcon : this.icon;
    },
  },
  methods: {
    onClick() {
      document.querySelector(this.selector).click();
    },
  },
};
</script>

<style lang="scss" scoped>
.wiz-bg-reset {
  position: absolute;
  top: 541px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 44px;
  cursor: pointer;
  overflow: hidden;
}

  .icon {
    width: 25px;
    height: 25px;
  }

</style>
