<template>
    <div>
        <div class="grid grid-cols-10 w-full h-full">
            <div class="col-span-2 w-full h-full">
                  <Navbar/>
            </div>
            <div class="col-span-8 w-full h-full p-10">
        <table class="w-full">
            <thead>
                <tr>
                    <td>No</td>
                    <td>Meme</td>
                    <td>Deskripsi</td>
                    <td>#</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="l,i in lists" :key="l.id">
                    <td>{{ i+1 }}</td>
                    <td><img :src="l.foto" alt="" class="w-16 h-16"></td>
                    <td>{{ l.deskripsi }}</td>
                    <td>
                        <div class="">

                            <button class="rounded-md bg-rose-600 py-1 px-2 text-center text-white font-semibold text-md mr-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white font-bold">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                        </button>
                            <button class="rounded-md bg-sky-600 py-1 px-2 text-center text-white font-semibold text-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white font-bold">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
</button>
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
const supabase = useSupabaseAuthClient()
const lists = ref()
async function getRaw(){
    const {data,error} = await supabase.from("rawmeme").select()
    lists.value = data
}
onMounted(()=>{
    getRaw()
})
</script>
