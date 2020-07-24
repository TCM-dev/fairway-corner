<template>
  <div class="flex items-center w-full">
    <div class="relative inline-block">
      <input type="checkbox" class="h-5 w-5 opacity-0" :name="name" v-model="checked" />
      <div
        class="checkbox-custom absolute pointer-events-none checkbox-custom block h-5 w-5 bg-lightWhite border-solid border cursor-pointer rounded border-lightGrey"
        :class="checked ? 'checked bg-primaryGreen border-none' : ''"
      ></div>
    </div>
    <label class="ml-1" :for="name">
      <slot>{{label}}</slot>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  },
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

<style scoped>
.checked::after {
  content: "";
  display: block;
  height: 1.25rem;
  widows: 1.25rem;
  background-image: url("../assets/svg/icons/checkmark-outline.svg");
  background-repeat: no-repeat;
  background-position: center;
}

.checkbox-custom {
  top: 0.25rem;
}
</style>