<template>
    <div class="p-3">
        <div class="m-auto mt-16 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
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
            <div class="flex items-end justify-end my-5">
                <NuxtLink to="/register" class="ml-auto text-sm decoration-transparent text-blue-700 hover:underline dark:text-blue-500 ">Register Here</NuxtLink>
            </div>
            
            <hr class="mt-1">
            <h4 class="text-center text-md text-gray-400 font-semibold mt-2 mb-2">or</h4>
            <button @click="SigninGithub()" class="py-1.5 w-full bg-gray-800 text-white font-semibold text-center text-md rounded-md hover:bg-gray-700">SignIn With Github</button>
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

