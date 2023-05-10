<script setup lang="ts">
defineProps<{
  disable: boolean
}>();
</script>

<template>
  <div>
    <button class="button cursor-pointer rounded" :disabled="!disable">
      <span class="button-content">
        <slot />
      </span>
    </button>
  </div>
</template>

<style lang="scss">
.button {
  padding: 4px 12px;
  border: none;
  border-radius: 2px;
  background: #bb86fc;
  color: black;
  font-family: inherit;

  &:hover {
    background: var(--color-primary-blue3);
  }

  &:active {
    background: var(--color-primary-blue1);
  }

  &:disabled {
    background: var(--color-primary-blue1);

    .button-content {
      color: var(--app-foreground1);
      cursor: not-allowed;
    }
  }
}
</style>
