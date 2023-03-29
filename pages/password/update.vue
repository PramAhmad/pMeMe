<template>
    <div>
      
       <div class="p-3 flex items-center justify-center w-full h-screen align-middle">
            <div class="items-center align-middle w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="py-4 mb-2">
               <h5 class="text-xl font-medium text-gray-900 dark:text-white mb-3">Change Your Password</h5>
        <form @submit.prevent="updatePassword"  class="space-y-4">
            <input type="text" name="" id="" v-model="password" 
            placeholder="new password"
             class="bg-gray-50 px-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required>
            <button class="py-1.5 px-5 bg-sky-500 rounded-md text-white hover:bg-sky-400 font-semibold">udpate</button>
        </form>
            </div>
            </div>
        </div>

    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'auth'
})
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
    alert("sukses ganti password")
}
</script>

