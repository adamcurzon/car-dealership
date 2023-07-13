<script setup>
import AllCarsTable from '../cars/AllCarsTable.vue';
</script>

<template>
    <div class="full-widget widget">
        <div class="title">All Cars
            <div class="title-right">
                <select>
                    <option>Name</option>
                    <option>Engine Size</option>
                    <option>Highest Price</option>
                    <option>Lowest Price</option>
                </select>
                <router-link class="button" to="/car/add"><i class="pi pi-plus-circle"></i> Add Car</router-link>
            </div>
        </div>
        <div class="table-holder">
            <AllCarsTable />
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.full-widget {
    height: 580px;
}
.table-holder {
    max-height: 505px;
    overflow: scroll;
}
</style>