<template>
    <div>
        <!-- <h3>nama:{{ user.user_metadata.user_name }}</h3>
        <h3>email:{{ user.user_metadata.email }}</h3> -->

<!-- Modal toggle -->

<!-- Modal toggle -->



<!-- Main modal -->






<div class="max-w-lg mx-auto mt-10">
  <h2 class="text-xl font-bold mb-4">Edit Profil</h2>
  <div class="border rounded-lg shadow-lg p-6">
    <div class="flex justify-center items-center mb-4">
      <div class="rounded-full border-4 border-white overflow-hidden mr-4">
        <img :src="user.user_metadata.avatar_url" alt="Profile picture" class="w-full h-full object-cover">
      </div>
      <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">
        Edit Foto
      </button>
       
      <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
    
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    CHange Your Name
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <div class="p-6 space-y-6">

               
               <form  method="post" @submit.prevent="updateName">
                 <label for="" class="block  mt-4 text-sm font-medium text-gray-900 dark:text-white">New Avtar</label>
                 <Avatar v-model:path="avapath" />
               
                    <button type="submit" class="py-1 px-3 mt-2 bg-sky-600 rounded-md hover:bg-sky-500 text-center text-white">Ubah</button>
                </form>
            </div>
     
          
        </div>
    </div>
</div>
    </div>
    <form  method="post" @submit.prevent="changeData">
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">
          Nama
        </label>
        <input class="bg-gray-50 px-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" id="name" type="text" placeholder="Masukkan nama Anda" required v-model="name">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="bio">
          Bio
        </label>
        <textarea class="bg-gray-50 px-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" id="bio" placeholder="Tulis bio Anda di sini" required v-model="bio"></textarea>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded mr-2">
          Simpan Perubahan
        </button>
        <NuxtLink to="/" class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
          Kembali
        </NuxtLink>
    </div>
        </form>
  </div>
 
</div>

</div>
</template>

<script setup>
import { initModals } from 'flowbite'
const user = useSupabaseUser()
const supabase = useSupabaseAuthClient()
const token = useSupabaseToken()
console.log(token)
const datas = ref()
const url = ref("https://wqogrgtqvjxkwlrdjpya.supabase.co/storage/v1/object/public/avatar/")
const avapath = ref() 
const name = ref()
const bio = ref()
const router = useRouter()
// console.log(user)



async function getName(){
    const {data,error} = await supabase.auth.getUser()

    console.log(data)
    datas.value = data

}
async function updateName(){
    console.log(name.value)
    const {error:tbl2} = await supabase.auth.updateUser({
        data:{
            avatar_url: url.value + avapath.value
            
        }
    })
      const {data ,error:tbl1} = await supabase
    .from("profiles")
    .update({
        avatar_url:url.value + avapath.value,
        id:user.value.id,
     
    })
    .eq('id',user.value.id)
    if(tbl1 || tbl2){
        console.error(tbl1 || tbl2)
    }
    navigateTo("/profile")
  
}
const changeData = async ()=>{
    const {error} = await supabase.auth.updateUser({
        data:{
            full_name:name.value,
            user_name:name.value,
           
        }
    })
      const {data ,error:tbl1} = await supabase
    .from("profiles")
    .update({
        
        id:user.value.id,
        full_name : name.value,
         bio:bio.value
    })
    .eq('id',user.value.id)
    if(tbl1 || tbl2){
        console.error(tbl1 || tbl2)
    }
    router.psuh("/peofile")
    
}
onMounted(()=>{
    getName()
    initModals()
})
</script>

