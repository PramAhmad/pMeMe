<template>
    <div>
        <h4>{{ p }}</h4>
         <h2>{{ user.user_metadata.user_name }}</h2>
    </div>
</template>

<script setup>
const supabase = useSupabaseAuthClient()
const user = useSupabaseUser()
const route = useRoute()

let p = route.params.nama
</script>

