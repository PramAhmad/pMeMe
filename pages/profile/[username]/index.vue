<template>
  <div class="">
    <div class="relative bg-gray-800 h-screen">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1595420832643-faf4aaf65c5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="Background image" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      <div class="relative flex flex-col items-center py-16 px-5" v-for="d in datas" :key="d.id">
        <div class="rounded-full border-4 border-white overflow-hidden">
          <img :src="d.avatar_url" alt="Profile picture"
            class="md:w-[400px] md:h-[400px]  w-[300px] h-[300px]  object-cover">
        </div>
        <h1 class="mt-6 text-4xl font-bold text-white">{{ d.full_name }}</h1>
        <p class="mt-2 text-lg text-gray-400" v-if="!d.bio">Bio tidak ada </p>
        <p class="mt-2 text-lg text-gray-400">{{ d.bio }}</p>

      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

const supabase = useSupabaseAuthClient()
const user = useSupabaseUser()
const route = useRoute()
const datas = ref([])
const memeCount = ref({})

const getUser = async () => {
  const { data } = await supabase
    .from('profiles')
    .select("id,avatar_url,full_name,bio")
    .eq('full_name', route.params.username)
  datas.value = data
}

async function getLengthMeme(dat) {
  console.log(dat)
  console.log(dat.id)


  const { data } = await supabase
    .from('rawmeme')
    .select()
    .eq('id_user', id)
  console.log(data)
  memeCount.value = data
  //   memeCount.value[dat.id] = data.length
  //   console.log(memeCount.value[dat.id])
}

onMounted(() => {
  getUser()

  getLengthMeme()

})
</script>
