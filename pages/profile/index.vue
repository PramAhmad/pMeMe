<template>
    <div>
        <!-- <h3>nama:{{ user.user_metadata.user_name }}</h3>
        <h3>email:{{ user.user_metadata.email }}</h3> -->

<!-- Modal toggle -->

<!-- Modal toggle -->



<!-- Main modal -->

<div class="md:w-1/2 m-auto mt-10 h-full pb-10 pt-10 px-5 bg-gray-50 rounded-md shadow-md" >
    <div class="w-full h-full rounded-full m-auto " v-for="d in datas" :key="d.id">
        <img :src="d.user_metadata.avatar_url" alt="" srcset="" class="w-44 h-44 rounded-full m-auto">
        <h4 class="mt-5 text-gray-700 font-bold  text-center text-2xl uppercase">{{ d.user_metadata.full_name }}</h4>
        
    </div>
<button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="m-auto block text-white bg-sky-600 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
</svg>

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
                 <label for="" class="block  mt-4 text-sm font-medium text-gray-900 dark:text-white">New Username</label>
                    <input type="text" v-model="name" class="py-2 px-3 mt-2 bg-gray-50 border border-gray-300 rounded-md  w-full">
                    <button type="submit" class="py-1 px-3 mt-2 bg-sky-600 rounded-md hover:bg-sky-500 text-center text-white">Ubah</button>
                </form>
            </div>
     
          
        </div>
    </div>
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
            full_name : name.value,
            user_name : name.value,
            avatar_url: url.value + avapath.value
            
        }
    })
    const {data ,error:tbl1} = await supabase
    .from("profiles")
    .update({
        avatar_url:url.value + avapath.value,
        id:user.value.id,
        full_name : name.value
    })
    .eq('id',user.value.id)
    if(tbl1 || tbl2){
        console.error(tbl1 || tbl2)
    }
}

onMounted(()=>{
    getName()
    initModals()
})
</script>

