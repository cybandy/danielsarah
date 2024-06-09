<script setup lang="ts">
import type { Database } from '~/types/supabase';

useHead({
    title: 'Authentication'
})
const items = [{
    slot: 'login',
    label: 'Login'
}, {
    slot: 'signup',
    label: 'Sign Up'
}]

const loginForm = reactive({ email: '', password: '' })
const singupForm = reactive({ email: '', password: '', name: '' })
const supabaseClient = useSupabaseClient<Database>()
const toast = useToast()

async function onSubmitLogin() {
    const { error } = await supabaseClient.auth.signInWithPassword({ email: loginForm.email, password: loginForm.password })
    if (error) {
        toast.add({ title: 'Oops!!!', description: 'Please try again later', color: 'red' })
    } else {
        toast.add({ title: 'Welcome!', color: 'primary' })
    }

    navigateTo('/')
}

async function onSubmitRegister() {
    // console.log('Submitted form:', singupForm)
    const { error } = await supabaseClient.auth.signUp({ email: singupForm.email, password: singupForm.password, options: { data: { name: singupForm.name } } })
    if (error) {
        toast.add({ title: 'Oops!!!', description: 'Please try again later', color: 'red' })
    } else {
        toast.add({ title: 'Welcome!', color: 'primary' })
    }

    navigateTo('/')

}
</script>

<template>
    <UContainer class="h-full grid place-content-center">
        <UTabs :items="items" class="min-w-full sm:min-w-[500px] md:min-w-[650px]">
            <template #login="{ item }">
                <UCard @submit.prevent="onSubmitLogin">
                    <template #header>
                        <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            {{ item.label }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Enter your email and password to login
                        </p>
                    </template>

                    <UFormGroup label="Email" name="email" class="mb-3">
                        <UInput v-model="loginForm.email" required autocomplete="username" />
                    </UFormGroup>
                    <UFormGroup label="Password" name="password">
                        <UInput v-model="loginForm.password" type="password" autocomplete="current-password" required />
                    </UFormGroup>

                    <template #footer>
                        <UButton type="submit" color="black">
                            Login
                        </UButton>
                    </template>
                </UCard>
            </template>

            <template #signup="{ item }">
                <UCard @submit.prevent="onSubmitRegister">
                    <template #header>
                        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            {{ item.label }}
                        </h3>
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Enter your email and password to signup.
                        </p>
                    </template>

                    <UFormGroup label="Name" name="name" required class="mb-3">
                        <UInput v-model="singupForm.name" autocomplete="name" required />
                    </UFormGroup>

                    <UFormGroup label="Email" name="email" required class="mb-3">
                        <UInput v-model="singupForm.email" autocomplete="username" required />
                    </UFormGroup>

                    <UFormGroup label="Password" name="password" required>
                        <UInput v-model="singupForm.password" autocomplete="current-password" type="password"
                            required />
                    </UFormGroup>

                    <template #footer>
                        <UButton type="submit" color="black">
                            Sign Up
                        </UButton>
                    </template>
                </UCard>
            </template>
        </UTabs>
    </UContainer>
</template>
