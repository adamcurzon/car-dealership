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
            <tr v-for="(child, index) in getCarsData" v-bind:key="index">
                <td>{{ child.carName }}</td>
                <td>1.1</td>
                <td>Petrol</td>
                <td>{{ child.carColour }}</td>
                <td>{{ child.carSku }}</td>
                <td></td>
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