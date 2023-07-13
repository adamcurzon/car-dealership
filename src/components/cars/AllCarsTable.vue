<template>
    <!-- <div if="getCarsData">
        <div :for="car in getCarsData">
            {{ car }}
        </div>
    </div> -->
    <table ref="cars">
        <thead>
            <td>Car Name</td>
            <td>Car Engine</td>
            <td>Engine Type</td>
            <td>Car Color</td>
            <td>Car Sku</td>
            <td></td>
            <td></td>
        </thead>
        <tbody v-html="getCarsTable"></tbody>
    </table>
</template>

<script>
import { mapMutations } from 'vuex';
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
            this.setCars(cars.value);
        }
    },
    computed: {
        getCarsTable() {
            let tableData = "";
            this.$store.state.cars.forEach(car => {
                tableData += "<tr>";
                tableData += "<td>"+car.carName+"</td>";
                tableData += "<td>"+"1.1"+"</td>";
                tableData += "<td>"+"Petrol"+"</td>";
                tableData += "<td>"+car.carColour+"</td>";
                tableData += "<td>"+car.carSku+"</td>";
                tableData += "<td><td><button>View Car</button></td></td>";
                tableData += "</tr>";
            });
            return tableData;
        }
    }
}
</script>