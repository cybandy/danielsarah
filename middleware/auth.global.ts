export default defineNuxtRouteMiddleware((to, _from) => {
    if (to.path == '/auth') {
        return
    }
    const user = useSupabaseUser()

    if (!user.value) {
        return navigateTo('/auth')
    }
})
