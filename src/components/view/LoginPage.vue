<script setup>
import LoginButton from '../buttons/LoginButton.vue';
import ErrorWidget from '../widgets/ErrorWidget.vue';
</script>

<template>
    <div class="page">
        <div class="login widget">
            <h1>Login</h1>
            <ErrorWidget :message="errorText"/>
            <label>Email</label>
            <div class="error" v-if="this.v$.email.$error">Email is required</div>
            <input v-model="email" @blur="this.v$.email.$touch" :class="{error: this.v$.email.$error}" type="text" />
            
            <label>Password</label>
            <div class="error" v-if="this.v$.password.$error">Password is required</div>
            <input @keydown.enter="login" v-model="password" @blur="this.v$.password.$touch" :class="{error: this.v$.password.$error}" type="password" />
            
            <LoginButton @click="login" class="black" />
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import jwt_decode from "jwt-decode";

import apis from '../../api/api';
export default {
    data() {
        return {
            v$: useVuelidate(),
            email: '',
            password: '',
            errorText: ''
        }
    },
    methods: {
        ...mapMutations(['setIsJwt', 'setUser']),
        async login() {
            this.v$.$validate();

            if (this.v$.$error) {
                this.errorText = "Error! Please fill out all fields";
                return;
            }

            let loginSuccess = await apis.login(this.email, this.password);

            if(!await loginSuccess){
                this.errorText = "Invalid credentials";
                return;
            }

            this.setIsJwt(true);

            // Decode JWT
            var decodedUser = jwt_decode(await loginSuccess);
            this.setUser(decodedUser);
        },
    },
    validations() {
        return {
            email: { required },
            password: { required },
        }
    }
}
</script>

<style scoped>
.page {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.widget.login {
    width: 100%;
    max-width: 500px;
    padding-top: 40px;
    padding-bottom: 40px;
}
.widget.login input {
    width: 100%;
    margin-bottom: 20px;
    margin-top: 5px
}
.widget.login button {
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
    padding: 15px 0px;
}
h1 {
    text-align: center;
    padding: 20px 0px;
}
</style>