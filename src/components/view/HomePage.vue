<script setup>
import AllCars from '../cars/AllCars.vue';
</script>

<template>
    <div class="page">
        <div class="flex-3">
            <div class="widget-3 widget accent">
                <div class="title-small">Total Cars</div>
                <div class="value">3</div>
                <div class="icon">
                    <i class="pi pi-car"></i>
                </div>
            </div>
            <div class="widget-3 widget">
                <div class="title-small">Users Online</div>
                <div class="value">1</div>
                <div class="icon">
                    <i class="pi pi-user"></i>
                </div>
            </div>
            <div class="widget-3 widget">
                <div class="title-small">Staff Online</div>
                <div class="value">1</div>
                <div class="icon orange">
                    <i class="pi pi-bolt"></i>
                </div>
            </div>
        </div>
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
            <AllCars />
        </div>
    </div>
</template>

<script>
export default {

}
</script>