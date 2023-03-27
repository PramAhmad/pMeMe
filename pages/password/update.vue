<template>
    <div>
      
      <div class="md:col-span-2 w-full md:h-screen hidden md:block relative">
  <div class="absolute inset-0 bg-gray-900 opacity-50"></div>
  <div class="absolute inset-y-0 right-0 w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-8 bg-white shadow-lg flex flex-col justify-center items-center">
    <h2 class="text-2xl font-bold text-gray-800 mb-8">Peraturan</h2>
    <ul class="list-disc text-gray-800 text-lg mb-8">
      <li>Tidak boleh melakukan tindakan toxic.</li>
      <li>Tidak boleh membahas konten 18+.</li>
      <li>Tidak boleh melakukan spam.</li>
      <li>Dilarang melakukan tindakan yang merugikan pengguna lain.</li>
    </ul>
    <button class="bg-blue-500 text-white rounded-full py-2 px-8 hover:bg-blue-600 transition-colors duration-300 ease-in-out">Saya Setuju</button>
  </div>
</div>

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

