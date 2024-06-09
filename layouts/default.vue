<script setup lang='ts'>
const user = useSupabaseUser()
const supabase = useSupabaseClient()
async function logout() {
    const { error } = await supabase.auth.signOut()
    navigateTo('/auth')

}
</script>

<template>
    <div class="w-screen h-screen flex flex-col gap-5 overflow-y-auto">
        <header class="">
            <UContainer class="flex items-center gap-5 p-5">
                <ULink to="/" class="text-center flex-grow text-2xl md:text-3xl leading-tight space-x-2">
                    <UIcon name="mdi:ring" dynamic class="w-6 h-6 text-primary" /> <span>Daniel & Sarah</span>
                </ULink>
                <div class="flex gap-5 items-center">
                    <DarkMode />
                    <UIcon @click="logout" v-if="user" name="ph:sign-out" class="w-5 h-5 cursor-pointer" dynamic />
                </div>
            </UContainer>
        </header>
        <div class="flex-grow">
            <slot />
        </div>
        <footer>
            <UContainer class="p-4 flex items-center justify-between gap-5">
                <p>
                    Auguri!!!
                </p>
                <p>
                    &copy; 2024 All rights reserved | QB Tech
                </p>
            </UContainer>
        </footer>
    </div>
</template>