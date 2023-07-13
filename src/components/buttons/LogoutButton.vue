<template>
    <button @click="logout"><i class="pi pi-power-off"></i>Logout</button>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    methods: {
        ...mapGetters(['isJwtSet']),
        ...mapMutations(['setIsJwt', 'setUser']),
        logout(){
            localStorage.removeItem('jwt');
            this.setIsJwt(false);
            this.setUser(false);
        }
    }
}
</script>