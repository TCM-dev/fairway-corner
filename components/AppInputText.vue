<template>
  <div>
    <input
      :id="placeholder"
      :ref="placeholder"
      class="py-2 px-4 border border-lightGrey rounded-lg font-medium custom-box-shadow"
      type="text"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
}
</style>
