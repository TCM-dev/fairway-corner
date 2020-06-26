<template>
  <div class="container">
    <div class="rows">
      <app-logo />
      <app-logo white />
      <app-logo-icon />
      <app-logo-icon white />
      <app-button />
      <app-button outlined />
      <app-button text />
      <app-button full-width />
      <app-button full-width outlined />
      <app-button full-width text />
      <app-button full-width text>Custom text</app-button>
      <app-section-title />
      <app-section-title>Custom title</app-section-title>
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
