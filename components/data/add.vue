<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import type { Database } from '~/types/supabase';
const state = reactive({
    name: undefined,
    amount: undefined
})
const supabaseClient = useSupabaseClient<Database>()
const toast = useToast()

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.name) errors.push({ path: 'name', message: 'Required' })
    if (!state.amount) errors.push({ path: 'amount', message: 'Required' })
    return errors
}

function reset() {
    state.amount = undefined
    state.name = undefined
}

async function onSubmit(event: FormSubmitEvent<any>) {
    // Do something with data
    console.log(event.data)
    const { data, error } = await supabaseClient.from('daniel_sarah').insert({ amount: event.data.amount, name: event.data.name })

    if (error) {
        toast.add({ title: 'Oops!!!', description: 'Please try again later', color: 'red' })
    } else {
        toast.add({ title: 'Saved', color: 'primary' })
        reset()
    }


}
</script>

<template>
    <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Name" name="name">
            <UInput icon="i-heroicons-identification" v-model="state.name" placeholder="John Doe" />
        </UFormGroup>

        <UFormGroup label="Amount" name="amount">
            <UInput icon="i-heroicons-currency-euro" v-model="state.amount" type="number" placeholder="50" />
        </UFormGroup>

        <UButton block type="submit">
            Save
        </UButton>
    </UForm>
</template>
