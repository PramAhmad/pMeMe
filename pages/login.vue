<template>
    <div>
        <div class="md:w-1/3 m-auto block my-2 mt-24 shadow-md border border-gray-200 p-4 rounded-md">
            <div class="">
                <h3 class="text-center font-bold text-gray-800 text-2xl">Masuk Pmeme</h3>
            </div>
            <form  method="post" @submit.prevent="login">
                <input type="email" v-model="email" placeholder="email"
                class="py-2 px-3 bg-gray-100 border border-gray-300 rounded-md mt-3 w-full"
                >
                <input type="password" v-model="password" placeholder="password"
                class="py-2 px-3 bg-gray-100 border border-gray-300 rounded-md my-3 w-full"
                >
                  <button @click="login" class="py-1.5 w-full bg-sky-500 text-white font-semibold text-center text-md hover:bg-sky-600 hover:transition duration-500 rounded-md my-2">Register</button>
            </form>
            <hr class="mt-1">
            <h4 class="text-center text-md text-gray-400 font-semibold mt-2 mb-2">or</h4>
            <button @click="SigninGithub()" class="py-1.5 w-full bg-gray-800 text-white font-semibold text-center text-md rounded-md hover:bg-gray-700">SignIn With Github</button>
        </div>
    </div>
</template>

<script setup>
import console from 'console';

const supabase = useSupabaseAuthClient()
const email = ref()
const password = ref()

async function SigninGithub(){
    const {error} = await supabase.auth.signInWithOAuth(
        {provider: 'github'}
    )
    if (error){
        console.log(error)
    }
}
async function login(){
    const {user,error} = await supabase.auth.signInWithPassword({
        email : email.value,
        password: password.value,
    })

    if(error){
        alert("woi error")
    }
}
</script>

