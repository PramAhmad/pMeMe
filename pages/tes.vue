<template>
    <div>
        <h1>tes</h1>
    </div>
</template>

<script setup>
const client = useSupabaseClient()

const getProfile = async () => {
  const { data, error } = await client
    .from('profiles')
    .select('id')
  

  console.log(data);
}

onMounted(() => {
    getProfile()
})
</script>