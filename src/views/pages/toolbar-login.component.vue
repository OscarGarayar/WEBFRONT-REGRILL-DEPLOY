<script>

export default {
    name: 'toolbar-login'
}
</script>

<template>
    <div class="toolbar-content-container" style="background-color: #004080">
        <toolbar class="toolbar-container">
            <template #start>
                <div class="toolbar-content">
                    <router-link to="/supplier/dashboard" class="home">
                        <span class="title-container">RE-GRILL</span>
                        <span class="title-container">distributor</span>
                        <p style="color: white; padding-left: 15px">Hacer click acá para ir al dashboard</p>
                    </router-link>
                </div>
            </template>
        </toolbar>
    </div>
</template>

<style scoped>
.title-container {
    color: white;
    font-weight: bolder;
    font-size: 30px;
    margin-left: 10px;
    text-align: center;
    white-space: nowrap;
}
.toolbar-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #004080;
    padding: 0 10px;
    box-sizing: border-box;
    height: 12vh;
}

.toolbar-content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
}

.logo {
    width: 50px;
    height: auto;
    margin-right: 100px;
}
</style>
