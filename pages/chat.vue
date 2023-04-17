<template>
  <div class="dark:bg-gray-600">
  
    <!-- <div v-for="message in messages" :key="message.id">
      <span>{{ message.id_user.full_name }}:</span>
      <span>{{ message.pesan }}</span>
    </div>
    <form @submit.prevent="sendMessage">
      <input type="text" v-model="pesan">
      <button type="submit">Send</button>
    </form> -->
    <div class="flex flex-col md:flex-row h-screen">
  <div class="md:w-1/5 h-full bg-gray-800">
    <Navbar/>
  </div>
  <div class="md:w-4/5 h-full bg-gray-100 flex flex-col dark:bg-gray-700">
    <div class="flex-1 overflow-y-auto py-4 px-4 md:py-8 md:px-12">
      <div class="flex space-x-2  my-4 transition duration-700" v-for="msg in messages" :key="msg.id">
  <img class="h-10 w-10 rounded-full" :src="msg.id_user.avatar_url">
  <div class="flex-1 " >
    <div class="max-w-prose inline-block bg-gray-50 p-2 rounded-xl mt-3 dark:bg-gray-600">
    <div class="flex items-center justify-between ">
      <NuxtLink :to="`/profile/`+msg.id_user.full_name" class="text-sm font-medium dark:text-gray-100">{{ msg.id_user.full_name }}</NuxtLink>
      
    </div>

      <p class="text-sm text-gray-700 dark:text-gray-50">{{ msg.pesan }}</p>
    </div>
  </div>
  </div>
    </div>
    <div class="h-16 md:h-24 bg-gray-200 dark:bg-gray-800 px-4 md:px-12 py-2 md:py-4">
      <form class="flex items-center h-full" @submit.prevent="sendMessage">
        <input type="text" placeholder="Type a message" class="w-full px-4 py-2 mr-2 rounded-full border-gray-300 focus:outline-none focus:ring focus:ring-blue-200" v-model="pesan">
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded-full">Send</button>
      </form>
    </div>
  </div>
</div>


  </div>
</template>
<script setup>
import {initDrawers} from 'flowbite'
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
  initDrawers()
})


</script>
