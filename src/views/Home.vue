<template>
  <div class="home">
    <Layout class="main_layout">
      <Header class="main_header">Template_Generator</Header>
      <Content class="main_content">Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>

<style lang="scss" scope>
.home {
  height: 100%;
  .main_layout {
    height: 100%;
  }
  .main_header {
    height: 60px;
    background: #ed6c00;
    color: #fff;
  }
  .main_content {
    // height: 80%;
    background: #ccc;
  }
}
</style>
