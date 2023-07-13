<template>
    <div v-if="message" class="widget notification error">
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