<template>
    <div>
      
      <div class="flex items-center justify-center w-full bg-gray-100 bg-opacity-75  h-screen" v-if="loading">
            
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
          
          
            <div class="w-full mt-5 shadow-md pb-5 md:mb-16 mb-10 items-center " v-for="d in datas" :key="d.id">
                <div class="w-full h-full bg-gray-50 flex border-b border-gray-300" >
                    <div class="rounded-full ml-6 my-3">
                        <img :src="d.avatar_url" alt="img avatar" class="w-10 h-10 p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500">
                    </div>
                    <h3 class="py-5 font-semibold  text-md text-gray-800 px-3">{{ d.nama_user }}</h3>
                </div>
                <img :src="d.foto" alt="" class="w-full h-full  pb-3">
                
                <p class="text-sm text-gray-800 px-3">Dibuat {{ d.created_at }}</p>
                <h5 class="px-3 text-md font-semibold mb-2">{{ d.deskripsi }}</h5>
                <div class="px-3 " >
                  <div v-for="l in likes" :key="l.id" >

                    <p v-if="d.id == l.post">jumlah like: {{ likes.length }}</p>
                  </div>

                    <button @click="addLike" class="py-2 px-3 mr-3 bg-gray-800 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white font-bold">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                    </button>
                  <button @click="getKomentar(d)"  class="py-2 px-3 bg-gray-800 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white font-bold">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                     </svg>

                  </button>
                  <form method="post" @submit.prevent="addKomentar(d)" v-if="user">
                    <input type="text" v-model="komen" class="w-1/3 py-2 px-4 bg-gray-50 rounded-md">
                    <button type="submit" class="mt-3 py-1.5 px-6 bg-gray-800 text-white font-semibold text-center text-lg rounded-md hover:bg-gray-700">komen</button>
                  </form>
                  <section v-for="c in coment" :key="c.id" class="w-2/3 bg-gray-100">
                    <div class="rounded-md bg-gray-700 w-[90%] px-3"  v-if="d.id == c.id_post">
                      <p class="text-gray-200 font-semibold text-md">{{ c.coment_by }}</p>
                         <p class="text-gray-300 font-base ">
                      {{ c.komentar }}
                    </p>
                    </div>
                 
                  </section>
                </div>
            </div>
            
            <div class="m-auto text-center mt-5" v-if="!datas.length < count " ><button @click="loadmore" class=" m-auto py-2 px-5 rounded-full bg-gray-900 text-gray-100 font-semi
             text-center text-lg" v-if="!loading">More More Fun </button></div>
            
        </div>
    </div>
  </div>
</template>

<script setup>
import {initModals} from 'flowbite'
const user = useSupabaseUser()
const supabase = useSupabaseAuthClient()
const count = ref(0)
const datas = ref([])
const loading = ref(true)
const coment = ref([])
const komen = ref()
const likes = ref([])






async function getMeme() {
  loading.value = true
  const { data, error } = await supabase
    .from("rawmeme")
    .select()
    .range(0,0)
    .eq("status", true)
    .order("id", { ascending: false })

  if (data) count.value = data.length
  datas.value = data

  if (data) {
    for (let i = 0; i < data.length; i++) {
      let tanggal = new Date(Date.parse(data[i].created_at)).toDateString() + ", "
      data[i].created_at = tanggal + new Date(Date.parse(data[i].created_at)).toLocaleTimeString()

      
    }
  }

  loading.value = false

  if (error) {
    console.log(error)
  }
}


async function loadmore(){
    loading.value = true
    let  limitStar = datas.value.length
    let  limitEnd  = limitStar+1
     const {data,error} = await supabase.from("rawmeme").select()
        .range(limitStar,limitEnd)
        .eq("status",true)
        .order("id",{ascending:false})
    if (data) {
        for (let i = 0; i < data.length; i++) {
          datas.value.push(data[i]);
        }
      }
       loading.value = false
}
async function getKomentar(d){
  loading.value = true
  const {data,error} = await supabase.from("coment")
  .select()
  .eq("id_post",d.id)
  .order("created_at",{ascending:false})
  coment.value = data
  
  loading.value = false
  console.log(data)
  if(error){
    console.log(error)
  }
}
async function addKomentar(d){

  const {error} = await supabase.from("coment")
  .insert({
    komentar:komen.value,
    coment_by:user.value.user_metadata.user_name,
    id_post:d.id,

  })

  komen.value=""

}
async function getLIkes(d){
  
  const {data,error} = await supabase
  .from('like')
  .select("*")
  .eq("post",d.id)
  .eq('post',datas.id)
  likes.value = data
}
async function addLike(){
  const {data,error} = await supabase
  .from("like")
  .insert({
    liked:true  , 
    liked_by:user.value.user_metadata.user_name
  })
  getLIkes(d)
}
onMounted(()=>{
    getMeme()
    getLIkes()
    getKomentar()
  
    
})
</script>
