<template>
    <div>
        <ul v-for="usr in datas" :key="usr.id">
            <li>{{ usr.full_name }}</li>
            <li><img :src="usr.avatar_url" alt=""></li>
            <li></li>
        </ul>
    </div>
</template>

<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseAuthClient()
const datas = ref([])

const getUser = async ()=>{
    const {data,error} = await supabase
    .from("profiles")
    .select("id,full_name,avatar_url")
    datas.value = data
}
onMounted(()=>{
    getUser()
})
</script>
