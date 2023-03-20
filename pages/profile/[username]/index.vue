<template>
  <div>
    <div class="md:w-1/2 m-auto mt-10 h-full pb-10 pt-10 px-5 bg-gray-50 rounded-md shadow-md">
      <div
        class="w-full h-full rounded-full m-auto"
        v-for="(dat, index) in datas"
        :key="index"
      >
       <!-- <p>{{ getLengthMeme(dat.id) }}</p> -->
       <p>{{ memeCount.length }}</p>
       <p></p>
        <img
          :src="dat.avatar_url"
          alt=""
          srcset=""
          class="w-44 h-44 rounded-full m-auto"
        />
        <h4 class="mt-5 text-gray-700 font-bold  text-center text-2xl uppercase">
          {{ dat.full_name }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script setup>


const supabase = useSupabaseAuthClient()
const user = useSupabaseUser()
const route = useRoute()
const datas = ref([])
const memeCount = ref({})

const getUser = async () => {
  const { data } = await supabase
    .from('profiles')
    .select()
    .eq('full_name', route.params.username)
  datas.value = data
}

async function getLengthMeme(dat) {
console.log(dat)
  console.log(dat.id)

  
  const { data } = await supabase
    .from('rawmeme')
    .select()
    .eq('id_user',id)
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
