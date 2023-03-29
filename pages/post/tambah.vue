<template>
    <div class="p-3 flex items-center justify-center w-full h-screen align-middle ">
        <div class="items-center align-middle w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="text-center font-bold text-gray-900 text-2xl my-2 mb-3">Post Meme</h5>
            <form  method="post" @submit.prevent="tambahMeme">
            <Foto v-model:path="fotopath" />
            <label for="deskripsi" class="block  mt-4 text-sm font-medium text-gray-900 dark:text-white">Deskripsi</label>
            <textarea name="" id="deskripsi" cols="30" rows="7"
            v-model="deskripsi"
            class="py-2 px-3 bg-gray-50 border border-gray-300 rounded-md mt-2 w-full"
            ></textarea>
        <button type="submit" class="mt-3 py-1.5 px-6 bg-gray-800 text-white font-semibold text-center text-lg rounded-md hover:bg-gray-700">tambah</button>
        </form>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'auth'
})
const supabase = useSupabaseAuthClient()
const user = useSupabaseUser()
const url =ref("https://wqogrgtqvjxkwlrdjpya.supabase.co/storage/v1/object/public/foto/")
const deskripsi = ref()
const fotopath = ref()
const status= ref(false)
const loading = ref(true)
// const orang = ref(user)

async function tambahMeme(){
    loading.value = true
    const {error} = await supabase.from("rawmeme").insert({

        deskripsi:deskripsi.value,
        foto:url.value + fotopath.value,
        id_user:user.value.id,
        status:status.value
    })
    navigateTo("/post/delay")
  loading.value = false
    if(error){
        console.log(error)
    }
    
    
   
}
</script>
