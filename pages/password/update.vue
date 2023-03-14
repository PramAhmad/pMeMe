<template>
    <div>
        <h3>update password</h3>
    </div>
</template>

<script setup>
const user = useSupabaseAuthClient()
const password = ref()

async function updatePassword(){
    const {data,error} = await user.auth.updateUser({
        password:password.value
    })
    if(error){
        console.log(error)
    }
}
</script>

