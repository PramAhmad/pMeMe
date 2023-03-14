export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser()
  if (user.value?.id !== "93ced6a1-34ab-46af-bce3-03cabfec9d8b") {
    
    return navigateTo('/')
  }
})