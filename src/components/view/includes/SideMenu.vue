<template>
    <div id="sidemenu">
        <div class="title"><i class="pi pi-check"></i> Dealership</div>
        <div class="breaker"></div>
        <router-link to="/"><i class="pi pi-car"></i>All Cars</router-link>
        <router-link to="/car/add"><i class="pi pi-plus"></i>Add Car</router-link>
        <router-link to="/activity"><i class="pi pi-chart-bar"></i>Activity</router-link>
        <div class="bottom-links">
            <router-link to="/logout"><i class="pi pi-power-off"></i>Logout</router-link>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
#sidemenu {
    width: var(--sidemenu-width);
    height: 100vh;
    background: var(--black);
    color: var(--grey);
    position: relative;
}

#sidemenu .title {
    color: var(--white);
    height: var(--topbar-height);
    line-height: var(--topbar-height);
    text-align: center;
    font-weight: 600;
    font-size: 23px;
}

#sidemenu .title .pi {
    margin-right: 5px;
}

#sidemenu .breaker {
    width: calc(100% - 40px);
    height: 1px;
    margin: 0 auto;
    background-color: var(--light-black);
}

#sidemenu a {
    display: block;
    width: calc(100% - 40px);
    height: 60px;
    line-height: 60px;
    color: var(--dark-grey);
    text-decoration: none;
    padding: 0px 20px;
    border-radius: var(--border-radius);
    margin: 20px auto;
    display: flex;
    align-items: center;
}

#sidemenu a:hover {
    color: var(--white);
    background-color: var(--light-black);
}

#sidemenu .router-link-active {
    color: var(--white);
}

#sidemenu a .pi {
    margin-right: 20px;
}

#sidemenu .bottom-links {
    width: 100%;
    bottom: 0;
    position: absolute;
    padding-bottom: 10px;
}
</style>