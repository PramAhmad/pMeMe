<template>
    <div>
        <div class="grid grid-cols-10 w-full h-full">
            <div class="col-span-2 w-full h-full">
                  
            </div>
            <div class="col-span-8 w-full h-full p-10 pt-16">
        <table class="w-full table table-striped py-2 px-3 ">
            <thead class="w-full py-3 bg-gray-900 h-14 text-white text-md font-semibold  rounded-t-md">
                <tr>
                    <td class="text-center">No</td>
                    <td class="text-left px-5">Meme</td>
                    <td class="text-left ">Deskripsi</td>
                    <td class="text-center">#</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="l,i in lists" :key="l.id">
                    <td>{{ i+1 }}</td>
                    <td><img :src="l.foto" alt="" class="w-16 h-16"></td>
                    <td>{{ l.deskripsi }}</td>
                    <td>
                        <div class="">

                            <NuxtLink :to="`/admin/`+l.id" class="rounded-md bg-sky-500 py-1 px-2 text-center text-white font-semibold text-md mr-3">
                               Lihat
                        </NuxtLink>
                     
                        </div>
                    
                    </td>
                </tr>
            </tbody>
        </table>
            </div>
        </div>
      
        
    </div>
</template>

<script setup>

definePageMeta({
    middleware: 'admin'
})
const supabase = useSupabaseAuthClient()

const lists = ref()
const route = useRoute()
async function getRaw(){
    const {data,error} = await supabase.from("rawmeme").select().eq('status',false)
    lists.value = data
}
onMounted(()=>{
    getRaw()
})
</script>
