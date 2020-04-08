<template>
  <div class="control_panel">
    <div class="control_panel_preview">
      <Preview></Preview>
    </div>
  </div>
</template>

<script>
import Preview from "@c/preview/index.vue";
export default {
  components: {
    Preview
  }
};
</script>

<style lang="scss" scoped>
.control_panel {
  height: 100%;
  display: flex;
  &_preview {
    background: chartreuse;
    margin-left: 10px;
  }
}
</style>
