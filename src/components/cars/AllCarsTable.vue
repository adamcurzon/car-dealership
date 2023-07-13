<template>
    <table ref="cars">
        <thead>
            <td>Car Name</td>
            <td>Car Engine</td>
            <td>Engine Type</td>
            <td>Car Color</td>
            <td>Car Sku</td>
            <td></td>
        </thead>
        <tbody>
            <tr v-for="(car, index) in getCarsData" v-bind:key="index">
                <td>{{ car.carName }}</td>
                <td>{{ car.carEngineSize }}</td>
                <td>{{ car.carEngineType }}</td>
                <td>{{ car.carColour }}</td>
                <td>{{ car.carSku }}</td>
                <td><router-link class="button" :to="{path: '/car/' + car.id}">View Car</router-link></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import api from '../../api/api';

export default {
    mounted() {
        this.getCars();
    },
    methods: {
        ...mapMutations([
            'setCars',
        ]),
        async getCars() {
            var cars = await api.getAllCars();
            if(cars == false){
                return;
            }
            this.setCars(cars.value);
        },
    },
    computed: {
        ...mapGetters(['getCarsData']),
    }
}
</script>