<template>
    <div>
         <div class="w-1/2 bg-gray-100 rounded-md h-full p-10 shadow-sm m-auto mt-10 " v-for="data in datas" :key="data.id">
            <div class="w-2/3 h-1/2">
                 <img :src="data.foto" class="w-full h-full rounded-md">                
            </div>
            <label for="" class="block  mt-4 text-sm font-medium text-gray-900 dark:text-white">Caption</label>
            <p>{{ data.deskripsi }}</p>
             <label for="" class="block  mt-4 text-sm font-medium text-gray-900 dark:text-white">Creator</label>
             <p>{{ data.nama_user }}</p>
            <form  method="post" @submit.prevent="updateMeme">
                <!-- <label for="" class="block  mt-4 text-sm font-medium text-gray-900 dark:text-white">Deskripsi</label>
                <textarea name="" id="deskripsi" cols="30" rows="7"
            v-model="desk"
            class="py-2 px-3 bg-gray-50 border border-gray-300 rounded-md mt-2 w-full"
            ></textarea> -->
                 <label for="" class="block  mt-4 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                 <input type="checkbox" name="" id="" v-model="stat" >
                 <button type="submit">ubah</button>
            </form>
        </div>
    </div>
</template>

<script setup>
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