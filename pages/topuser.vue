<template>
    <div>
        <form  method="post" @submit.prevent="topUsers">
            <input type="text" v-model="cari">
            <button type="submit">cari</button>
        </form>
        <ul v-for="u,index in users" :key="index">
            <li>{{ u.nama_user }}</li>
            <li>{{ users.length }}</li>
        </ul>
    </div>
</template>

<script setup>
const supabase = useSupabaseAuthClient()
const users = ref([])
const cari = ref()
async function topUsers() {
    try {
        const { data, error } = await supabase
            .from('rawmeme')
            .select(`nama_user`,{count:'exact'})
            .order('nama_user', { ascending: false })
            .like('nama_user',cari.value,{count:'exact'})
         
            

        if (error) {
            throw error;
        }

        users.value = data;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

onMounted(()=>{
    topUsers()
})
</script>

