<template>
   <div>
      <nav class=" fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
         <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
               <div class="flex items-center justify-start">
                  <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
                     data-drawer-backdrop="false" data-drawer-body-scrolling="true" type="button"
                     class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                     <span class="sr-only">Open sidebar</span>
                     <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd"
                           d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                        </path>
                     </svg>
                  </button>
                  <NuxtLink to="/" class="flex items-center pl-2 ">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-10 h-10 rotate-12 text-gray-900 dark:text-gray-100">
                        <path fill-rule="evenodd"
                           d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                           clip-rule="evenodd" />
                     </svg>

                     <h3 class="  text-2xl mr-3  font-bold dark:text-gray-100" alt="Flowbite Logo">P</h3>
                     <span
                        class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white md:inline hidden">meme</span>
                  </NuxtLink>
               </div>

               <div class="flex items-center">
                  <div class="relative inline-block" v-if="!user">
                     <select v-model="$colorMode.preference"
                        class="block appearance-none w-36 h-10 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-400 dark:border-gray-700 px-4 py-2 pr-8 focus:outline-none focus:border-blue-500">
                        <option class="bg-gray-200 dark:bg-gray-800" value="system">System</option>
                        <option class="bg-gray-200 dark:bg-gray-800" value="light">Light</option>
                        <option class="bg-gray-200 dark:bg-gray-800" value="dark">Dark</option>
                     </select>
                     <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                           <path d="M14.5 7.5L10 12l-4.5-4.5L4 9l6 6 6-6z" />
                        </svg>
                     </div>
                  </div>
                  <div class="flex items-center " v-if="user">
                     <div>
                        <button type="button"
                           class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                           aria-expanded="false" data-dropdown-toggle="dropdown-user">
                           <span class="sr-only">Open user menu</span>
                           <img class="w-8 h-8 rounded-full" :src="user.user_metadata.avatar_url" alt="user photo">
                        </button>
                     </div>
                     <div
                        class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                        id="dropdown-user">
                        <div class="px-4 py-3" role="none">
                           <p class="text-sm font-semibold text-gray-900 dark:text-white" role="none">
                              {{ user.user_metadata.full_name }}
                           </p>
                           <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                              {{ user.email }}
                           </p>
                        </div>
                        <ul class="py-1" role="none">
                           <li>
                              <NuxtLink to="/profile"
                                 class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                 role="menuitem">Update Profile</NuxtLink>
                           </li>
                           <li>
                              <NuxtLink to="/password/update"
                                 class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                 role="menuitem">Change Password</NuxtLink>
                           </li>


                           <li>
                              <button @click="logout()"
                                 class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                 role="menuitem">Sign out</button>
                           </li>
                           <li>
                              <div class="relative inline-block px-4">
                                 <select v-model="$colorMode.preference"
                                    class="block appearance-none w-36 h-10 font-semibold rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-400 dark:border-gray-600 py-2 pr-2 px-2 focus:outline-none focus:border-blue-500">
                                    <option class="bg-gray-100 dark:bg-gray-800" value="system">System</option>
                                    <option class="bg-gray-100 dark:bg-gray-800" value="light">Light</option>
                                    <option class="bg-gray-100 dark:bg-gray-800" value="dark">Dark</option>
                                 </select>
                                 <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5 text-gray-700 dark:text-white">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 20 20">
                                       <path d="M14.5 7.5L10 12l-4.5-4.5L4 9l6 6 6-6z" />
                                    </svg>
                                 </div>
                              </div>
                           </li>

                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </nav>

      <aside id="logo-sidebar"
         class="fixed top-0 left-0 z-40 md:w-[20%] w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
         aria-label="Sidebar">
         <div class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-600 ">
            <a href="https://flowbite.com/" class="flex items-center pl-2.5 mb-5">
               <h3 class="h-10  text-2xl  sm:h-7 font-bold" alt="Flowbite Logo">P</h3>

            </a>
            <ul class="space-y-5 ">
               <!-- <li v-if="user">
            <p  class="flex items-center p-2  font-semibold text-lg text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               
               <span class="ml-3">Hi,{{ user.user_metadata.user_name }}</span>
            </p>
         </li> -->
               <li>
                  <NuxtLink to="/"
                     class="flex items-center p-2 text-base  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                        <path
                           d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path
                           d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                     </svg>

                     <span class="flex-1 ml-3 whitespace-nowrap">Home</span>

                  </NuxtLink>
               </li>
               <li v-if="!user">
                  <NuxtLink to="/login"
                     class="flex items-center p-2 text-base font-semibold text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                           d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                           clip-rule="evenodd"></path>
                     </svg>
                     <span class="flex-1 ml-3 whitespace-nowrap">Login</span>

                  </NuxtLink>
               </li>
               <li v-if="!user">
                  <NuxtLink to="/register"
                     class="flex items-center p-2 text-base font-semibold text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                           d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                           clip-rule="evenodd"></path>
                     </svg>
                     <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                  </NuxtLink>
               </li>

               <li v-if="user">
                  <NuxtLink to="/post"
                     class="flex items-center p-2 text-base font-semibold text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                        <path fill-rule="evenodd"
                           d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                           clip-rule="evenodd" />
                     </svg>


                     <span class="flex-1 ml-3 whitespace-nowrap">My Meme</span>
                     <span
                        class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">{{
                           datas.length }}</span>
                  </Nuxtlink>
               </li>
               <li>
                  <NuxtLink to="/chat"
                     class="flex items-center p-2 text-base font-semibold text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                        <path
                           d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                        <path
                           d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                     </svg>

                     <span class="flex-1 ml-3 whitespace-nowrap">Chat</span>
                  </NuxtLink>
               </li>
               <li v-if="user">
                  <NuxtLink :to="`/profile/` + user.user_metadata.full_name"
                     class="flex items-center p-2 text-base font-semibold text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                           clip-rule="evenodd"></path>
                     </svg>
                     <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
                  </NuxtLink>
               </li>
               <li v-if="user">
                  <NuxtLink to="/post/tambah"
                     class="flex items-center p-2 text-base font-semibold text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                        <path fill-rule="evenodd"
                           d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                           clip-rule="evenodd" />
                     </svg>

                     <span class="flex-1 ml-3 whitespace-nowrap">Post Meme</span>
                  </NuxtLink>
               </li>
               <li v-if="user">
                  <button @click="logout"
                     class="flex items-center p-2 text-base font-semibold text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                        <path fill-rule="evenodd"
                           d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
                           clip-rule="evenodd" />
                     </svg>

                     <span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
                  </button>
               </li>
            

            </ul>



         </div>
      </aside>
   </div>
</template>

<script setup>
import { initDrawers, initDropdowns } from 'flowbite'
const user = useSupabaseUser()
const supabase = useSupabaseAuthClient()

const datas = ref([])


async function logout() {
   const { error } = await supabase.auth.signOut()
   navigateTo('/login')
   alert("logout sukses")
   if (error) {
      console.log(error)
   }
}
async function getSelectedPost() {
   const { data, error } = await supabase.from("rawmeme")
      .select('id_user(id)', { count: 'exact' })
      .eq("id_user(id)", user.value.id)

   datas.value = data
}
// const getuser = async ()=>{
//    const {data,error} = await supabase
//    .from('profiles')
// }
onMounted(() => {
   getSelectedPost()
   initDrawers()
   initDropdowns()

})
onBeforeMount(() => {
   initDrawers()
   initDropdowns()
})

</script>

