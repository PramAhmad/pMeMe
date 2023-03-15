<template>
    <div>
        <form  method="post" @submit.prevent="ChangePassword">
            <input type="text" v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            <button type="submit" class="px-5 py-2 text-center font-semibold rounded-full bg-sky-500 hover:bg-sky-400 text-white mt-2 hover:transition duration-500 ">kirim email</button>
        </form>
    </div>
</template>

<script setup>
const name = useSupabaseUser()
const email = ref()
const user =useSupabaseAuthClient()
console.log(name)
async function ChangePassword(){
    const {data,error} = await user.auth.resetPasswordForEmail(email.value,{
        redirectTo:"http://localhost:3000/password/update"
    })
    if(error){
        console.log(error)
    }
    console.log(data)
}
</script>

