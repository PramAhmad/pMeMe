<template>
    <div class="p-3 flex justify-center items-center w-full h-screen">
        <div class=" w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="py-4 mb-2">
               <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to Pmeme</h5>
            </div>
            <form  method="post" @submit.prevent="login" class="space-y-4 md:space-y-6 ">
                <label for="email" class="block md:mb-2  text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" v-model="email" placeholder="name@company.com"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                >
                <label for="password" class="block  md:mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                <input type="password" id="password" v-model="password" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                >
                  <button @click="login" class="py-1.5 w-full bg-sky-500 text-white font-semibold text-center text-md hover:bg-sky-600 hover:transition duration-500 rounded-md my-2">Masuk</button>
                  
            </form>
            <div class="flex justify-between my-5">
                <NuxtLink to="/password/forget" class="mx-auto text-sm decoration-transparent text-blue-700 hover:underline dark:text-blue-500 ">Forgot Password?</NuxtLink>
                <NuxtLink to="/register" class="mx-auto text-sm decoration-transparent text-blue-700 hover:underline dark:text-blue-500 ">Register Here</NuxtLink>
            </div>
            
            <hr class="mt-1">
            <h4 class="text-center text-md text-gray-400 font-semibold mt-2 mb-2">or</h4>
          <div class="flex items-center justify-center gap-6">
                <button @click="SigninGithub()" class="   text-white font-semibold text-center text-md rounded-md hover:bg-gray-700"><font-awesome-icon icon="fa-brands fa-square-github" class="w-10 h-10 text-5xl text-gray-800 bg-white" /></button>
                <button @click="SigninGoole()" class="  text-white font-semibold text-center text-md rounded-md hover:bg-gray-700"><font-awesome-icon icon="fa-brands fa-square-google-plus" class="w-10 h-10 text-5xl text-red-600 bg-white" /></button>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'noauth'
})

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
async function SigninGoole(){
    const {error} = await supabase.auth.signInWithOAuth({
        provider:'google'
    })
}
async function login(){
    const {user,error} = await supabase.auth.signInWithPassword({
        email : email.value,
        password: password.value,
    })
    navigateTo("/")

    if(error){
        alert("sandi/email salah")
        navigateTo("/login")
    }
}
</script>

