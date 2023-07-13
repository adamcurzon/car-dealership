<template>
    <div v-if="message" class="widget notification success">
        {{ message }}
    </div>
</template>

<script>
export default {
    props: [
        'message',
    ],
}
</script>