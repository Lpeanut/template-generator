<template>
  <div class="preview">
    <div
      class="blood-conner"
      v-for="(item, index) in bloodStyles"
      :key="index"
      :style="{ ...bloodRect, ...item }"
    ></div>
    <Button @click="exportFiles">导出文件</Button>
  </div>
</template>

<script>
import conf from "@/configs/jsons/tpl_001";
import { exportCss } from '@/share/fs'
export default {
  data() {
    return {
      a: "xx"
    };
  },
  computed: {
    bloodRect() {
      return {
        width: conf.bloodWidth + "px",
        height: conf.bloodHeight + "px"
      };
    },
    bloodStyles() {
      return conf.bloodStyles.map(item => {
        const o = {};
        for (const i in item) {
          o[i] = item[i] + "px";
        }
        return o;
      });
    }
  },
  methods: {
    exportFiles() {
      exportCss()
    }
  },
  created() {
    console.log(this.bloodStyles);
  }
};
</script>

<style lang="scss" scoped>
.preview {
  position: relative;
  width: 396.3 * 2px;
  height: 276 * 2px;
  background: #7c0505;
}
.blood-conner {
  position: absolute;
  background: #000;
}
</style>
