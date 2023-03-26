<template>
  <div>
  
    <div v-for="message in messages" :key="message.id">
      <span>{{ message.id_user.full_name }}:</span>
      <span>{{ message.pesan }}</span>
    </div>
    <form @submit.prevent="sendMessage">
      <input type="text" v-model="pesan">
      <button type="submit">Send</button>
    </form>
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
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
  } else {
    messages.value = messagesData
    
  }

  setInterval(async () => {
  
    const { data, error } = await supabase
      .from('chat')
      .select('id, id_user(full_name), pesan, created_at')
      .order('created_at', { ascending: false })
      .range(0, 9)

    if (error) {
      console.error(error)
    } else {
      messages.value = data
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
