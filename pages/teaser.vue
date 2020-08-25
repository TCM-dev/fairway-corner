<template>
  <div>
    <iframe
      src="https://www.youtube.com/embed/1_ijJAu7g9c"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style lang="scss">
iframe {
  width: 100%;
  min-height: 100vh;
}
</style>

<script>
export default {
  layout: "video",
};
</script>
