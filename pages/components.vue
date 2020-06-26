<template>
  <div class="container">
    <div class="rows">
      <app-button />
      <app-button outlined />
      <app-button text />
      <app-button full-width />
      <app-button full-width outlined />
      <app-button full-width text />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rows {
  margin: 1em;
}

.rows > * {
  display: block;
  margin-bottom: 1em;
}
</style>

<script>
import AppButton from "~/components/AppButton";
export default {
  components: {
    AppButton
  }
};
</script>
