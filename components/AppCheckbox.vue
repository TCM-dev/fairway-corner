<template>
  <div>
    <div class="relative">
      <input
        type="checkbox"
        :name="name"
      />
      <div
        class="checkbox-custom block h-5 w-5 bg-lightWhite border-solid border cursor-pointer rounded border-lightGrey"
      ></div>
    </div>
    <label :for="name">
      <slot>{{label}}</slot>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "name"
    },
    label: {
      type: String,
      default: ""
    }
  }
};
</script>