<template>
    <div>
           <div>
          <div class="flex items-center justify-center w-full bg-gray-100 bg-opacity-75 m-auto h-screen" v-if="loading">
                
            <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>

            </div>
   
    <div class="md:grid md:grid-cols-10 w-full h-full">
      
        <div class="col-span-2 w-full h-full ">
            <Navbar/>
        </div>
        <div class="md:col-span-6 w-full h-full md:px-10 px-4 pt-16 pb-10  m-auto " >
 
          <div class=" bg-sky-500 hover:g-sky-600 text-center font-semibold text-white mt-7 w-44 h-5 rounded-md flex items-center justify-center"><NuxtLink to="/post/delay">butuh persetujuan: {{ unapp.length }}</NuxtLink></div>
          
            <div class="w-full mt-5 shadow-md pb-5 md:mb-16 mb-10 items-center " v-for="d in datas" :key="d.id">
                <div class="w-full h-full bg-gray-50 flex  border-b border-gray-300" v-if="user">
                    <div class="rounded-full ml-6 my-3">
                        <img :src="d.avatar_url" alt="img avatar" class="w-10 h-10 p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500">
                    </div>
                    <h3 class="py-5 font-semibold  text-md text-gray-800 px-3">{{ d.nama_user }}</h3>
                    <button @click="deletepost(d)" class="py-0.5 h-10 ml-auto mr-4 mt-3  px-2 rounded-md bg-red-600 hover:bg-red-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-white">
    <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
    </svg>
    </button>
                </div>
                <img :src="d.foto" alt="" class="w-full h-full  pb-3">
                
                <p class="text-sm text-gray-800 px-3">Dibuat {{ d.created_at }}</p>
                <h5 class="px-3 text-md font-semibold mb-2">{{ d.deskripsi }}</h5>
              
            </div>
            
            
        </div>
    </div>
  </div>

    </div>
</template>

<script setup>
const supabase = useSupabaseAuthClient()
const user = useSupabaseUser()
const datas = ref([])
const loading = ref(true)
const route = useRoute();
const unapp = ref([])
route.params.id;

async function getName(){
    const {data,error} = await supabase.auth.getUser()

    console.log(data)
    datas.value = data

}
async function getSelectedPost(){
    loading.value = true
    const {data,error} = await supabase.from("rawmeme")
    .select()
    .eq("nama_user",user.value.user_metadata.user_name)
    .eq("status",true)
    .order("created_at",{ascending:true})
    datas.value = data
    loading.value = false
    console.log(data)
    
}
async function UnapprovedPost(){
    loading.value = true
    const {data,error} = await supabase.from("rawmeme")
    .select()
    .eq("nama_user",user.value.user_metadata.user_name)
    .eq("status",false)
    unapp.value = data
    loading.value=false
    console.log(unapp.length)
}
async function deletepost(d){
      const { error, status } = await supabase.from("rawmeme").delete().eq("id", d.id);
  // console.log(status);
  if (status === 204) {
    alert("data berhasil di hapus");
    getSelectedPost();
  }
  if(error){
    console.log(error)
  }
}
onMounted(()=>{
    getSelectedPost()
    getName()
    UnapprovedPost()
})
</script>

