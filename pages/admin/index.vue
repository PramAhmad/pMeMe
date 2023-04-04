<template>
    <div>
        <div class="md:grid md:grid-cols-10 w-full h-full">
            <div class="md:col-span-2 w-full h-full">
                <AdminNav/>
            </div>
            <div class="md:col-span-6 w-full  h-full px-x pt-16 pb-10 ">
                
                <div class="flex flex-col lg:flex-row w-full lg:space-x-6 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
                          <div class="w-full lg:w-1/3 ">
                <div class="widget w-full p-4 rounded-lg bg-gray-50 bg-opacity-50 border-l-4 border-green-400">
                    <div class="flex items-center">
                        <div class="icon w-14 p-3.5 bg-green-400 text-white rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
</svg>

                        </div>
                        <div class="flex flex-col justify-center">
                            <div class="text-lg font-semibold text-gray-800">{{users.length}}</div>
                            <div class="text-sm text-gray-400">Total Users</div>
                            <div class="mt-1">
                                <NuxtLink to="/admin/user" class="py-0.5 px-2 bg-green-400 rounded-full hover:bg-green-500 text-white font-semibold mt-1">Lihat</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                          <div class="w-full lg:w-1/3 ">
                <div class="widget w-full p-4 rounded-lg bg-gray-50 bg-opacity-50 border-l-4 border-sky-400">
                    <div class="flex items-center">
                        <div class="icon w-14 p-3.5 bg-sky-400 text-white rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
</svg>

                        </div>
                        <div class="flex flex-col justify-center">
                            <div class="text-lg font-semibold text-gray-800">{{memes.length}}</div>
                            <div class="text-sm text-gray-400">Total Meme Posted</div>
                              <div class="mt-1">
                                <NuxtLink to="/admin/meme" class="py-0.5 px-2 bg-sky-400 rounded-full hover:bg-sky-500 text-white font-semibold mt-1">Lihat</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                          <div class="w-full lg:w-1/3 ">
                <div class="widget w-full p-4 rounded-lg bg-gray-50 bg-opacity-50 border-l-4 border-rose-400">
                    <div class="flex items-center">
                        <div class="icon w-14 p-3.5 bg-rose-400 text-white rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
</svg>

                        </div>
                        <div class="flex flex-col justify-center">
                            <div class="text-lg font-semibold text-gray-800">{{unpost.length}}</div>
                            <div class="text-sm text-gray-400">Total Unposted Meme</div>
                               <div class="mt-1">
                                <NuxtLink to="/admin/meme/accept" class="py-0.5 px-2 bg-rose-400 rounded-full hover:bg-rose-500 text-white font-semibold mt-1">Lihat</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                   
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'admin'
})
const supabase = useSupabaseAuthClient()
const users = ref([])
const memes = ref([])
const unpost = ref([])
const getUserlength = async ()=>{
    const {data,error} = await supabase
    .from("profiles")
    .select()
    if(error){
        console.log(error)

    }
    users.value = data
}
const getMemeLength = async ()=>{
    const {data,error} = await supabase
    .from("rawmeme")
    .select()
    .eq('status',true)
    if(error){
        console.log(error)

    }
    memes.value = data
    
}
const getunpost = async ()=>{
    const {data,error} = await 
    supabase
    .from("rawmeme")
    .select()
    .eq('status',false)
if(error){
    console.log(error)

}
unpost.value = data
} 

onMounted(()=>{
    getUserlength()
    getMemeLength()
    getunpost()
})
</script>
