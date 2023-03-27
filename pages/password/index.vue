<template>
    <div>
       <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
  <h1 class="text-4xl font-bold text-gray-900 mb-6 text-center">Halaman ini sedang dalam pengembangan</h1>
  <p class="text-xl text-gray-800 mb-12 text-center">Mohon maaf atas ketidaknyamanan ini. jika ingin mengganti password silahkan hubungi kami.</p>
  <a href="https://wa.me/62859138483542" target="_blank" rel="noopener noreferrer" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
    Hubungi Kami di WhatsApp
  </a>
</div>

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

