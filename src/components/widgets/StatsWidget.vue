<template>
    <div class="flex-3">
        <div class="widget-3 widget accent">
            <div class="title-small">Total Cars</div>
            <div class="value">{{ getStats.totalCars }}</div>
            <div class="icon">
                <i class="pi pi-car"></i>
            </div>
        </div>
        <div class="widget-3 widget">
            <div class="title-small">Users Online</div>
            <div class="value">{{ getStats.usersOnline }}</div>
            <div class="icon">
                <i class="pi pi-user"></i>
            </div>
        </div>
        <div class="widget-3 widget">
            <div class="title-small">Staff Online</div>
            <div class="value">{{ getStats.adminsOnline }}</div>
            <div class="icon orange">
                <i class="pi pi-bolt"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import apis from '../../api/api';
export default {
    mounted() {
        this.getStatsState();
    },
    methods:{
        ...mapMutations(['setStats']),
        async getStatsState(){
            this.setStats(await apis.getStats())
            return true;
        }
    },
    computed: {
        ...mapGetters(['getStats'])
    }
}
</script>