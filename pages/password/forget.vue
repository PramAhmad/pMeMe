<template>
    <div>
        <div class="p-3 flex items-center justify-center w-full h-screen align-middle">
            <div class="items-center align-middle w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="py-4 mb-2">
               <h5 class="text-xl font-medium text-gray-900 dark:text-white mb-3">Send email for change password</h5>
        <form @submit.prevent="signwithEmail"  class="space-y-4">
            <input type="email" name="" id="" v-model="email" 
            placeholder="Email"
             class="bg-gray-50 px-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required>
            <button class="py-1.5 px-5 bg-sky-500 rounded-md text-white hover:bg-sky-400 font-semibold">Send</button>
        </form>
            </div>
            </div>
        </div>
    </div>  
</template>

<script setup>
import { getMaxListeners } from 'process';

const supabase = useSupabaseAuthClient()
const email = ref()
const signwithEmail = async () =>{
    const {data,error} = await supabase.auth.resetPasswordForEmail(email.value,{
        redirectTo:"https://p-meme.vercel.app/password/update"
    })
    if(error){
        console.log(error)
    }
} 
</script>
