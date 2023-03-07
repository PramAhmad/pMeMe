<template>
    <div>
        <form  method="post" @submit.prevent="tambahMeme">
            <Foto v-model:path="fotopath" @upload="tambahMeme"/>
            <input type="text"
             v-model="deskripsi"
            class="py-2 px-3 bg-gray-100 border border-gray-300 rounded-md mt-3 w-full"
            >
        <button type="submit" class="py-1.5 w-full bg-gray-800 text-white font-semibold text-center text-md rounded-md hover:bg-gray-700">tambah</button>
        </form>
    </div>
</template>

<script setup>
const supabase = useSupabaseAuthClient()
const user = useSupabaseUser()
const url =ref("https://wqogrgtqvjxkwlrdjpya.supabase.co/storage/v1/object/public/foto/")
const deskripsi = ref()
const fotopath = ref()
// const orang = ref(user)

async function tambahMeme(){
    const {error} = await supabase.from("rawmeme").insert({
        deskripsi:deskripsi.value,
        foto:url.value + fotopath.value,
        nama_user:user.value.user_metadata.user_name,
    })
    deskripsi.value = ""
  
    if(error){
        console.log(error)
    }

    
   
}
</script>
