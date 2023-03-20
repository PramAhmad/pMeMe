<template>
    <div class="flex justify-center items-center w-full h-full ">
         <div class=" w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 " v-for="data in datas" :key="data.id">
            <h3 class="text-left text-gray-600 font-semibold text-2xl mb-5">Accept the Post</h3>
            <div class="w-2/3 h-1/2">
                 <img :src="data.foto" class="w-full h-1/2 rounded-md">                
            </div>
            <label for="" class="block  mt-4 text-sm font-medium text-gray-800 dark:text-white">Caption</label>
            <p class="text-gray-600 font-medium text-sm ">{{ data.deskripsi }}</p>
             <label for="" class="block  mt-4 text-sm font-medium text-gray-800 dark:text-white">Creator</label>
             <p class="text-gray-600 font-medium text-sm">{{ data.nama_user }}</p>
            <form  method="post" @submit.prevent="updateMeme">
                <!-- <label for="" class="block  mt-4 text-sm font-medium text-gray-900 dark:text-white">Deskripsi</label>
                <textarea name="" id="deskripsi" cols="30" rows="7"
            v-model="desk"
            class="py-2 px-3 bg-gray-50 border border-gray-300 rounded-md mt-2 w-full"
            ></textarea> -->
                 <label for="" class="block  mt-4 text-sm font-medium text-gray-900 dark:text-white">Setujui</label>
                 <input type="checkbox" name="" id="" v-model="stat" class="w-4 h-4 mb-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                 <div class="">
                    <button type="submit" class="py-2 px-5 bg-sky-500 rounded-md text-white text-center font-semibold text-md hover:bg-sky-400 hover:transition duration-500 ">ubah</button>
                 </div>
                 
            </form>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'admin'
})
const supabase = useSupabaseAuthClient()
const datas = ref([])
const route = useRoute()
const stat = ref()
const desk = ref()


async function getSelectedMeme(){
    const {data,error} = await supabase
    .from("rawmeme")
    .select()
    .eq("id",route.params.id)
    datas.value = data
    console.log(data)
  
}
async function updateMeme(){
    const statusValue = stat.value ? 1 : 0;
        console.log(statusValue)
        console.log(desk.value)
    const {error} = await supabase
    .from("rawmeme")
    .update({
        
        status:statusValue
    })
    .eq("id",route.params.id)
    
    if(error){
        console.log(error)
    }
    else{
        console.log("sukses")
    }
}
onMounted(()=>{
    getSelectedMeme()
})
</script>