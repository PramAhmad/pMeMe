<template>
    <div>
        <!-- <h5 class="text-center font-bold text-gray-900 text-3xl">ini halaman utama</h5>
        <h5 v-if="user">Selamat Datang {{ user.user_metadata.user_name }}</h5>
     
        <button v-if="user" @click="logout" class="py-2 px-5 text-md font-semibold text-center text-white bg-sky-500 rounded-full">Logout</button>
        <NuxtLink v-if="!user" to="/login" class="py-2 px-5 text-md font-semibold text-center text-white bg-sky-500 rounded-full">Login</NuxtLink>
        -->
        <div class="grid grid-cols-10 w-full h-full">
            <div class="col-span-2 w-full h-full ">
                <Navbar/>
            </div>
            <div class="col-span-8 w-full h-full px-10 pt-10  ">
                <div class="w-full mt-5 shadow-md " v-for="d in datas" :key="d.id">
                    <div class="w-full h-16 bg-gray-100 flex  ">
                        <div class="rounded-full ml-6 w-10 h-10 py-3">

                            <img :src="user.user_metadata.avatar_url" alt="img avatar" class="w-10 h-10  rounded-full  ">
                        </div>
                        <h3 class="py-5 font-semibold  text-md text-gray-800 px-3">{{ d.id_rawmeme.nama_user }}</h3>
                    </div>
                    <img :src="d.id_rawmeme.foto" alt="" class="w-full p-3">
                    <p class="text-sm text-gray-800 px-3">Dibuat {{ d.id_rawmeme.created_at }}</p>
                    <h5 class="px-3 text-md font-semibold">{{ d.id_rawmeme.deskripsi }}</h5>
                    <div class="px-3">

                        <button class="py-2 px-3 mr-3 bg-gray-800 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white font-bold">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>
                        </button>
                      <button class="py-2 px-3 bg-gray-800 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white font-bold">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                         </svg>

                      </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const user = useSupabaseUser()
const supabase = useSupabaseAuthClient()

const datas = ref([])

console.log(user)



async function getMeme(){
    const {data,error} = await supabase.from("meme").select(`    
        id_rawmeme(
            created_at,
            id,
            deskripsi,
            foto,
            nama_user
            )`)
    datas.value = data
    console.log(datas.value)
    if(error)
    {
        console.log(error)
    }
}

onMounted(()=>{
    getMeme()
    
})
</script>
