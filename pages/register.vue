<template>
    <div class="p-3 flex items-center justify-center w-full h-screen align-middle ">
        <div class=" items-center align-middle w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="py-4 mb-2">
               <h5 class="text-xl font-medium text-gray-900 dark:text-white">SignUp to Pmeme</h5>
            </div>
            <form  method="post" @submit.prevent="signup" class="space-y-4">
                <input type="username" v-model="username" placeholder="username"
                class="bg-gray-50 px-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
                >
                <input type="email" v-model="email" placeholder="email"
                class="bg-gray-50 px-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
                >
                <input type="password" v-model="password" placeholder="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 px-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
                >
                  <button @click="login" class="mb-2 py-1.5 w-full bg-sky-500 text-white font-semibold text-center text-md hover:bg-sky-600 hover:transition duration-500 rounded-md my-2">Register</button>
            </form>
            <hr class="mt-4">
            <h4 class="text-center text-md text-gray-400 font-semibold mt-2 mb-2">or</h4>
            <div class="flex items-center justify-center gap-6">
                <button @click="SigninGithub()" class="   text-white font-semibold text-center text-md rounded-md hover:bg-gray-700"><font-awesome-icon icon="fa-brands fa-square-github" class="w-10 h-10 text-5xl text-gray-800 bg-white" /></button>
                <button @click="SigninGoogle()" class="  text-white font-semibold text-center text-md rounded-md hover:bg-gray-700"><font-awesome-icon icon="fa-brands fa-square-google-plus" class="w-10 h-10 text-5xl text-red-600 bg-white" /></button>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'noauth'
})


const supabase = useSupabaseAuthClient()
const supa = useSupabaseUser()
const email = ref()
const password = ref()
const avatar = ref("https://wqogrgtqvjxkwlrdjpya.supabase.co/storage/v1/object/public/avatar/705891.png")
const username = ref()
const bio = ref("belum punya bio")

async function SigninGithub(){
    const {error} = await supabase.auth.signInWithOAuth(
        {provider: 'github',
         options:{
            data:{
                bio:bio.value
            }
        }
    }
    )
    
    if (error){
        console.log(error)
    }
}
async function SigninGoogle(){
    const{error} = await supabase.auth.signInWithOAuth(
        {provider:'google',
         options:{
            data:{
                bio:bio.value
            }
        }
    }
    )
    if(error){
        console.log(error)
    }
}
async function signup(){
    const {data,error} = await supabase.auth.signUp({   
        email : email.value,
        password: password.value,
        options:{
            data:{
                full_name:username.value,
                user_name:username.value,
                avatar_url:avatar.value,
                bio:bio.value
            }
        }

    })
    if(error){
      console.log(error)
        navigateTo("/register")
    }
        else{
            alert("silahkan cek email")
            navigateTo("/login")
    }
  
    
    // console.log(supa.id)
    // console.log(email.value)
    // console.log(user)
}
</script>

