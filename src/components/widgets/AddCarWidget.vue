<script setup>
import SuccessWidget from '../widgets/SuccessWidget.vue';
import ErrorWidget from '../widgets/ErrorWidget.vue';
</script>

<template>
    <SuccessWidget :message="successText" />
    <ErrorWidget :message="errorText" />
    <div class="full-widget widget addcar">
        <div class="title">Add Car</div>
        <form>
            <label>Car Name<sup>*</sup></label>
            <div class="error errorText" v-if="this.v$.name.$error">Car name is required</div>
            <input type="text" v-model="name" @blur="this.v$.name.$touch" :class="{ error: this.v$.name.$error }" />

            <label>Car Engine Size<sup>*</sup></label>
            <div class="error errorText" v-if="this.v$.engineSize.$error">Car engine size is required</div>
            <input type="text" v-model="engineSize" @blur="this.v$.engineSize.$touch"
                :class="{ error: this.v$.engineSize.$error }" />

            <label>Car Engine Type<sup>*</sup></label>
            <div class="error errorText" v-if="this.v$.engineType.$error">Car engine type is required</div>
            <input type="text" v-model="engineType" @blur="this.v$.engineType.$touch"
                :class="{ error: this.v$.engineType.$error }" />

            <label>Car Colour<sup>*</sup></label>
            <div class="error errorText" v-if="this.v$.colour.$error">Car colour is required</div>
            <input type="text" v-model="colour" @blur="this.v$.colour.$touch" :class="{ error: this.v$.colour.$error }" />

            <label>Car Sku<sup>*</sup></label>
            <div class="error errorText" v-if="this.v$.sku.$error">Car sku is required</div>
            <input type="text" v-model="sku" @blur="this.v$.sku.$touch" :class="{ error: this.v$.sku.$error }" />

            <button type="button" @click="createCar" class="black">Add Car</button>
        </form>
    </div>
</template>

<script>
import apis from '../../api/api';
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default {
    data() {
        return {
            v$: useVuelidate(),
            name: '',
            colour: '',
            sku: '',
            engineSize: '',
            engineType: '',
            successText: '',
            errorText: '',
        }
    },
    methods: {
        async createCar(e) {
            e.preventDefault();

            this.successText = '';
            this.successText = '';

            this.v$.$validate();
            if (this.v$.$error) {
                this.errorText = "Error! Please fill out all fields";
                return;
            }

            let createCar = await apis.createCar(
                this.name,
                this.colour,
                this.sku, 
                this.engineSize,
                this.engineType
            );

            if (!await createCar) {
                this.errorText = "Error! Car couldn't be created";
                return;
            }

            this.successText = "Successfully created new car";

            this.name = '';
            this.colour = '';
            this.sku = '';
            this.engineSize = '';
            this.engineType = '';

            this.v$.$reset();
        },
    },
    validations() {
        return {
            name: { required },
            colour: { required },
            sku: { required },
            engineType: { required },
            engineSize: { required },
        }
    }
}
</script>

<style>
.addcar input {
    width: calc(100% - 30px);
    margin: 0px auto;
    margin-bottom: 20px;
    margin-top: 5px
}

.addcar button {
    width: calc(100% - 30px);
    margin: 0 auto;
    margin-top: 20px;
    padding: 15px 0px;
}
</style>