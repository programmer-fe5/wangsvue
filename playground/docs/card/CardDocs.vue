<script setup lang="ts">
import Button from 'lib/components/button/Button.vue';
import Card from 'lib/components/card/Card.vue';
</script>

<template>
  <Card>
    <template #header> This is a Header using slot #header </template>
    <template #title> Card title </template>
    <template #subtitle> Card Sub Title </template>
    <template #content>
      The content using slot #content.Card provides header, title, subtitle,
      content and footer as the named templates to place content.
    </template>
    <template #footer>
      <span>The #footer</span>
      <Button label="Cancel" text />
      <Button label="Apply" />
    </template>
  </Card>
</template>
