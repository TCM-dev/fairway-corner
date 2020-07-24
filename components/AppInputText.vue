<template>
  <div>
    <input
      :id="placeholder"
      :ref="placeholder"
      class="py-2 px-4 border border-lightGrey rounded-lg font-medium"
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
  mounted() {
    const input = this.$refs["Entrer votre mot de passe"];
    input.setAttribute("size", input.getAttribute("placeholder").length);
  },
};
</script>