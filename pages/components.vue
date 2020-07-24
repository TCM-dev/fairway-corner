<template>
  <div class="rows">
    <div style="max-width: 500px">
      <app-logo />
      <app-logo white />
    </div>
    <div style="max-width: 200px">
      <app-logo-icon />
      <app-logo-icon white />
    </div>
    <div>
      <app-social-media />
    </div>
    <app-button />
    <app-button outlined />
    <app-button text />
    <app-button full-width />
    <app-button full-width outlined />
    <app-button full-width text />
    <app-button full-width text>Custom text</app-button>
    <app-section-title />
    <app-section-title>Custom title</app-section-title>
    <app-checkbox checkbox1>Je suis une checkbox</app-checkbox>
    <app-input-text placeholder="Entrer votre mot de passe" />
    <app-contact />
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