<script setup lang='ts'>
import type { Database } from '~/types/supabase';
useHead({
  title: 'Data'
})
// const limit = ref(10)
// const offset = ref(0)
// const nu_offset = computed(() => offset.value + (offset.value * limit.value))
// async function getData() {
//   const client = useSupabaseClient<Database>()
//   const { data } = await client.from('daniel_sarah').select('*', { count: 'exact', head: false }).range(nu_offset.value, nu_offset.value + limit.value)
//   console.log(data);

// }
// onMounted(async () => {
//   await getData()

// })
</script>

<template>
  <UContainer>

  </UContainer>
</template>