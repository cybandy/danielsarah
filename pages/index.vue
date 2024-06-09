<script setup lang='ts'>
useHead({
    title: 'Auguri Daniel & Kwadwo'
})
const user = useSupabaseUser()
console.log(user.value);

</script>

<template>

    <UContainer class="grid place-content-center">

        <UCard class="min-w-full sm:min-w-[500px] md:min-w-[700px]">

            <template #header>
                <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                    Data Entry
                </p>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Enter the name and amount of invited guest
                </p>
            </template>

            <DataAdd />
        </UCard>

    </UContainer>
</template>