<template>
  <div>

    <div class="flex items-center justify-center w-full bg-gray-100 bg-opacity-75  h-screen dark:bg-gray-700" v-if="loading">

      <div role="status">
        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor" />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill" />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>

    </div>
    <div class="md:grid md:grid-cols-10 w-full h-full bg-gray-50 dark:bg-gray-700">

      <div class="md:col-span-2 w-full h-full ">
        <Navbar />
      </div>
      <div class="md:col-span-6 w-full h-full  px-4 pt-16  pb-10 place-items-center  ">


        <div class="md:w-[80%] w-full mt-5 shadow-md pb-5 md:mb-16 mb-10 place-self-center m-auto  bg-gray-50 dark:bg-gray-800" v-for="d in datas"
          :key="d.id">


          <div class="w-full h-full bg-gray-100 dark:bg-gray-800 flex border-b border-gray-300">
            <div class="rounded-full ml-6 my-3">
              <img :src="d.id_user.avatar_url" alt="img avatar"
                class="w-10 h-10 p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500">
            </div>
            <NuxtLink :to="`/profile/` + d.id_user.full_name" class="py-5 font-semibold  text-md text-gray-800 dark:text-gray-100 px-3">{{
              d.id_user.full_name }}</NuxtLink>
          </div>
          <img :src="d.foto" alt="" class="w-full h-full  pb-3">

          <p class="text-sm text-gray-800 px-3 dark:text-gray-100">Dibuat {{ d.created_at }}</p>
          <h5 class="px-3 text-md font-semibold mb-2 text-gray-800 dark:text-gray-100">{{ d.deskripsi }}</h5>
          <div class="px-3 ">
            <!-- <section  class="w-2/3 bg-gray-100" v-for="l in likes " :key="l.id">
                    <div class="rounded-md bg-gray-700 w-[90%] px-3"  v-if="l.post == d.id"  >
                      <p>{{ likes.length }}</p>
                    </div>
                  </section> -->

            <!-- <button @click="addLike(d)" class="py-2 px-3 mr-3 bg-gray-800 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white font-bold">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                         </svg>
                     </button> -->

            <button @click="getKomentar(d)" class="py-1.5 mr-3 px-2 bg-gray-800 dark:bg-transparent dark:border dark:border-white rounded-md inline-block align-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-white s">
  <path fill-rule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
</svg>

            </button>

            <a :href="`https://twitter.com/intent/tweet?&related=onecak&original_referer=` + d.foto"
              class="py-1.5 px-2 bg-gray-800 rounded-md inline-block align-middle  dark:bg-transparent dark:border dark:border-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-white">
                <path fill-rule="evenodd"
                  d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                  clip-rule="evenodd" />
              </svg>

            </a>



            <section v-for="c in coment" :key="c.id" class="w-full bg-gray-100">


              <p v-if="!coment.length">Tidak ada komentar</p>
              <div class="bg-white dark:bg-gray-800 text-black dark:text-gray-200 p-2 antialiased flex "
                v-if="d.id == c.id_post">
                <div class="flex items-center space-x-6 ">
                  <div class="group relative flex flex-shrink-0 self-start cursor-pointer">
                    <img x-on:mouseover="open1 = true" x-on:mouseleave="open1 = false" :src="c.id_user.avatar_url" alt=""
                      class="h-8 w-8 object-fill rounded-full">

                  </div>
                </div>
                <div class="flex justify-center items-center space-x-2 ml-3 ">
                  <div class="bg-gray-100 w-full dark:bg-gray-700 rounded-xl px-2 pb-2">
                    <div class="font-medium">
                      <NuxtLink :to="`/profile/` + c.id_user.full_name" class="hover:underline text-sm">
                        <small>{{ c.id_user.full_name }}</small>
                      </NuxtLink>
                    </div>
                    <div class="text-xs">
                      <p>{{ c.komentar }}</p>
                    </div>
                  </div>

                </div>
              </div>



            </section>
            <form method="post" @submit.prevent="addKomentar(d)" v-if="user">

              <div class="relative md:w-1/2 w-[80%] mt-5">
                <input type="search" v-model="komen" id="search-dropdown"
                  class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-100 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Coment here" required>
                <button type="submit"
                  class="absolute top-0 right-0 p-2 text-sm font-medium text-white bg-gray-900 rounded-r-lg border border-gray-700 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-gray-900"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg></button>
              </div>
            </form>
          </div>
        </div>

        <div class="m-auto text-center mt-5" v-if="!datas.length < count && !load"><button @click="loadmore" class=" m-auto py-2 px-5 rounded-full bg-gray-900 text-gray-100 font-semi
                             text-center text-lg dark:text-gray-100 dark:bg-blue-500 dark:hover:bg-blue-400">
            More More Fun
          </button></div>
        <div class="m-auto text-center mt-5" v-if="!datas.length < count && load"><button @click="loadmore" class=" m-auto py-2 px-5 rounded-full bg-gray-900 text-gray-100 font-semi
                             text-center text-lg dark:text-gray-100 dark:bg-blue-500 dark:hover:bg-blue-400">
            waiting fun
          </button></div>




      </div>
      <div class="md:col-span-2 w-full md:h-screen  hidden md:block">
        <div
          class="fixed pl-5 top-0   w-1/2 h-full bg-white border-l border-gray-200 dark:bg-gray-800 dark:border-gray-700 px-10">
          <h3 class="text-2xl pb-5 font-bold text-gray-900 pt-16 dark:text-white">New Users</h3>
          <ul class="max-w-sm divide-y divide-gray-200 dark:divide-gray-700" v-for="u in users" :key="u.id">
            <li class="pb-3 sm:pb-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img class="w-8 h-8 rounded-full" :src="u.avatar_url" alt="Neil image">
                </div>
                <div class="flex-1 min-w-0">
                  <NuxtLink :to="`/profile/` + u.full_name"
                    class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {{ u.full_name }}
                  </NuxtLink>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {{ u.bio }}
                  </p>
                </div>

              </div>
            </li>


          </ul>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { initModals, initDropdowns, initDrawers } from 'flowbite'
const user = useSupabaseUser()

const supabase = useSupabaseAuthClient()
const count = ref(0)
const datas = ref([])
const loading = ref(true)
const load = ref(true)
const coment = ref([])
const komen = ref()
const likes = ref([])
const users = ref([])


const getUsers = async () => {
  const { data, error } = await supabase
    .from("profiles")
    .select()
    .limit(9)
    .order("updated_at", { ascending: true })
  users.value = data

}


async function getMeme() {
  loading.value = true
  const { data, error } = await supabase
    .from("rawmeme")
    .select('id,created_at,deskripsi,foto,status,id_user(id,full_name,avatar_url)')
    .range(0, 0)
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
  load.value = false

  if (error) {
    console.log(error)
  }
}


async function loadmore() {
  load.value = true
  let limitStar = datas.value.length
  let limitEnd = limitStar + 1
  const { data, error } = await supabase.from("rawmeme")
    .select(`id,created_at,deskripsi,foto,status,id_user(id,full_name,avatar_url)`)
    .range(limitStar, limitEnd)
    .eq("status", true)
    .order("id", { ascending: false })
  if (data) {
    for (let i = 0; i < data.length; i++) {
      datas.value.push(data[i]);
    }
  }
  load.value = false
}

// async function getLIkes(){
//   console.log(d.id)
//   const {data,error} = await supabase
//   .from('like')
//   .select("post(id,deskripsi,foto,status),id_user(id,full_name,avatar_url)")
//   .eq("post",57)
//   // .eq("post",d.id)
//   likes.value = data


// }
// const addLike = async (d) =>{
//    const {error} = await supabase
//   .from("like")
//   .insert({
//     post:d.id,
//     id_user:d.id_user.id,

//   })
//   if(error){
//     console.log(error)
//   }

//   const {error:tbl2}  = await supabase
//   .from("rawmeme")
//   .update({
//     :+1
//   })
//    .eq("id",d.id)
//    .subscribe()
//   getLIkes(d)

// }
async function getKomentar(d) {

  loading.value = true
  const { data, error } = await supabase.from("coment")
    .select("id,created_at,id_post,komentar,id_user(id,full_name,avatar_url)")
    .eq("id_post", d.id)
    .order("created_at", { ascending: false })
  coment.value = data

  loading.value = false
  if (error) {
    console.log(error)
  }


}
async function addKomentar(d) {
  console.log(user.value.id)
  const { error } = await supabase.from("coment")
    .insert({
      komentar: komen.value,
      id_user: user.value.id,
      id_post: d.id,

    })

  komen.value = ""
  if (error) {
    console.log(error)
  }

}

onMounted(() => {
  getMeme()
  // getLIkes()
  // getKomentar()
  initDropdowns()
  initModals()
  getUsers()
  initDrawers()


})

</script>
