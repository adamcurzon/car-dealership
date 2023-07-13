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
                <button><i class="pi pi-plus-circle"></i> Add Car</button>
            </div>
        </div>
        <AllCarsTable />
    </div>
</template>

<script>
export default {}
</script>