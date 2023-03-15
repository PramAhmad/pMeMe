<template>
    <div>
      
        <form  method="post" @submit.prevent="updatePassword">
            <input type="text" v-model="password
            ">
            <button type="submit">ubah</button>
        </form>
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
    if(data){
        console.log("suskes")
    }
}
</script>

