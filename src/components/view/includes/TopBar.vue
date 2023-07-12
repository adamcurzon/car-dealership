<template>
    <div id="topbar">
        <div class="search">
            <i class="pi pi-search"></i>
            <input type="text" placeholder="Search a car" />
        </div>
        <div class="topbar-right">
            <div class="notifications">
                <i class="pi pi-bell"></i>
                <div class="count">3</div>
            </div>
            <div class="name">Adam Curzon</div>
            <div class="profile">
                <img src="https://avatars.githubusercontent.com/u/82769416?s=58&v=5" />
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
#topbar {
    width: 100%;
    height: var(--topbar-height);
    flex-shrink: 0;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    position: relative;
}

#topbar input {
    color: var(--black);
    border: 0;
    outline: 0;
    background-color: var(--grey);
    width: calc(100% - 11px);
    height: calc(var(--topbar-height) - 40px);
}

#topbar .search {
    min-width: 300px;
    height: calc(var(--topbar-height) - 40px);
    background-color: var(--grey);
    border-radius: var(--border-radius);
    padding: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

#topbar .search .pi {
    width: 4px;
    margin-right: 10px;
    font-size: 13px;
    color: var(--dark-grey);
}

#topbar input::placeholder {
    color: var(--dark-grey);
}
.topbar-right {
    position: relative;
    right: 0px;
    display: flex;
    align-items: center;
    gap: 15px;
}
#topbar .profile {
    width: 40px;
    height: 40px;
    border-radius: 100px;
    background-color: var(--grey);
    cursor: pointer;
    overflow: hidden;
}
#topbar .name {
    color: var(--dark-grey);
    font-size: 12px;
}

#topbar .profile img {
    width: 100%;
    height: 100%;
}

.notifications {
    position: relative;
    font-size: 20px;
    cursor: pointer;
}

.notifications .count {
    width: 11px;
    height: 11px;
    line-height: 11px;
    background-color: var(--orange);
    border-radius: 100px;
    position: absolute;
    top: -1px;
    right: -1px;
    font-size: 8px;
    text-align: center;
    color: var(--white);
}
</style>