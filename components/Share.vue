<template>
    <div>
        


<button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownDotsHorizontal" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
      <li>
        <a :href="`https://www.facebook.com/share.php?&src=bm&v=4&u=`+d.foto" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a :href="`https://www.facebook.com/share.php?&src=bm&v=4&u=`+d.foto" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a :href="`https://www.facebook.com/share.php?&src=bm&v=4&u=`+d.foto" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-2">
      <a :href="`https://www.facebook.com/share.php?&src=bm&v=4&u=`+d.foto" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
    </div>
</div>

    </div>
</template>

<script setup>
import {initDropdowns} from 'flowbite'
const supabase = useSupabaseAuthClient()
const datas = ref([])
async function getMeme() {
  loading.value = true
  const { data, error } = await supabase
    .from("rawmeme")
    .select('id,created_at,deskripsi,foto,status,like_count,id_user(id,full_name,avatar_url)')
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

onMounted(()=>{
    initDropdowns()
    getMeme()
})
</script>
