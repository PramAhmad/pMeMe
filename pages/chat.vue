<template>
  <div>
  
    <!-- <div v-for="message in messages" :key="message.id">
      <span>{{ message.id_user.full_name }}:</span>
      <span>{{ message.pesan }}</span>
    </div>
    <form @submit.prevent="sendMessage">
      <input type="text" v-model="pesan">
      <button type="submit">Send</button>
    </form> -->
    <div class="md:grid md:grid-cols-10 w-full h-full">
      <div class="md:col-span-2 w-full h-full ">
            <Navbar/>
        </div>
        <div class="md:col-span-6 w-full max-h-[90vh] overflow-y-auto  px-4 pt-16  pb-10 place-items-center "  >
          <div class="h-[80%]">
       <div class="flex space-x-2  my-4 transition duration-700" v-for="msg in messages" :key="msg.id">
  <img class="h-10 w-10 rounded-full" :src="msg.id_user.avatar_url">
  <div class="flex-1 " >
    <div class="max-w-prose inline-block bg-gray-50 p-2 rounded-xl mt-3">
    <div class="flex items-center justify-between ">
      <NuxtLink :to="`/profile/`+msg.id_user.full_name" class="text-sm font-medium">{{ msg.id_user.full_name }}</NuxtLink>
      
    </div>

      <p class="text-sm text-gray-700">{{ msg.pesan }}</p>
    </div>
  </div>
</div>

          </div>
              <form @submit.prevent="sendMessage" >
                <div class=" absolute bottom-2 md:w-2/3 w-[95%]" >
                   <div class="relative  md:w-[85%] w-[95%] mt-5">
            <input type="search" v-model="pesan" id="search-dropdown" class="block p-3.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Coment here" required>
            <button type="submit" class="absolute top-0 right-0 p-3 text-sm font-medium text-white bg-gray-900 rounded-r-full border border-gray-700 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg></button>
        </div>
                </div>
              </form>
        </div>
       <div class="md:col-span-2 w-full md:h-screen hidden md:block relative">
  <div class="absolute inset-0 bg-gray-900 opacity-50"></div>
  <div class="absolute inset-y-0 right-0 w-full p-8 bg-white shadow-lg flex flex-col justify-center items-center">
    <h2 class="text-2xl font-bold text-gray-800 mb-8">Peraturan</h2>
    <ul class="list-disc text-gray-800 text-lg mb-8">
      <li>Tidak boleh melakukan tindakan toxic.</li>
      <li>Tidak boleh membahas konten 18+.</li>
      <li>Tidak boleh melakukan spam.</li>
      <li>Dilarang melakukan tindakan yang merugikan pengguna lain.</li>
    </ul>
 
  </div>
</div>

    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseAuthClient()
const messages = ref([])
const pesan = ref()




  const sendMessage = async () => {
      const { error } = await supabase
        .from('chat')
        .insert({
          id_user: user.value.id,
          pesan: pesan.value
        })

      if (error) {
        console.error(error)
      } else {
        pesan.value = ''
      }
    }

  

// Fallback untuk client yang tidak mendukung fitur "on()"
if (!('on' in supabase.from('chat'))) {
  
  const { data: messagesData, error } = await supabase
    .from('chat')
    .select()
    .order('id', { ascending: false })
    const reversedData = messagesData.reverse();

  if (error) {
    console.error(error)
  } else {
    messages.value = reversedData
    
  }

  setInterval(async () => {
  
    const { data, error } = await supabase
      .from('chat')
      .select('id, id_user(full_name,avatar_url), pesan, created_at')
      .order('id', { ascending: false })
      .range(0, 20)
      const reversedData = data.reverse();


    if (error) {
      console.error(error)
    } else {
      messages.value = reversedData
    }
  }, 1000)

} else {
  supabase
    .from('chat')
    .on('INSERT', (payload) => {
      messages.value.unshift(payload.new)
    })
    .subscribe()
    
}


onMounted(() => {

})


</script>
