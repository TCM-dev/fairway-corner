<template>
  <div>
    <div v-if="!white">
      <svg
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 41 41"
      >
        <path fill="#25b196" d="M12.9 29.7l7.5-7.6 7.6 7.6-7.6 7.6z" />
        <path
          d="M20.5 41L0 20.5 20.5 0 41 20.5zM3.7 20.5l16.8 16.8 16.8-16.8L20.5 3.7z"
        />
      </svg>
    </div>
    <div v-if="white">
      <svg
        id="Calque_1"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 41 41"
      >
        <defs>
          <style>
            .cls-1 {
              fill: #fff;
            }
          </style>
        </defs>
        <path
          class="cls-1"
          transform="rotate(-45 20.5 29.7)"
          d="M15.1 24.3h10.7V35H15.1z"
        />
        <path
          class="cls-1"
          d="M20.5 41L0 20.5 20.5 0 41 20.5zM3.7 20.5l16.8 16.8 16.8-16.8L20.5 3.7z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    white: {
      type: Boolean,
      default: false
    }
  }
};
</script>
