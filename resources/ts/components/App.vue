<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ClientLayout from '@/layouts/ClientLayout.vue';

const route = useRoute();

interface Layouts {
  [client: string]: InstanceType<typeof ClientLayout>;
}

const layouts: Layouts = {
  client: ClientLayout
};

const defaultLayout = 'client';

const layout = computed(() => layouts[route.meta.layout || defaultLayout]);
</script>

<template>
  <component :is="layout" />
</template>
