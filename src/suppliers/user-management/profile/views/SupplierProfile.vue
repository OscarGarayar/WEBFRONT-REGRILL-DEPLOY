<script setup>
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Avatar from 'primevue/avatar';
import { onMounted, ref } from 'vue';
import { SupplierProfileApiService } from '@/suppliers/user-management/profile/services/supplier-profile-api.service';

const profiles = ref([]);
onMounted(async () => {
    //Profile
    const profileService = new SupplierProfileApiService();
    const allProfiles = await profileService.getSupplierProfile();

    profiles.value = allProfiles;
    console.log(profiles.value);

});


</script>

<template>
    <Splitter style="height: 300px" >
        <SplitterPanel class="flex items-center justify-center" :size="20" :minSize="10">
            <Avatar icon="pi pi-user" class="mr-2" size="xlarge"></Avatar>
        </SplitterPanel>
        <SplitterPanel :size="80">
            <Splitter layout="vertical">
                <SplitterPanel class="flex items-center justify-center" :size="15">
                    <div v-for="profile in profiles" :key="profile.id" class="mb-4">
                        <h3>{{ profile.firstname }}</h3>
                        <h3>{{ profile.lastName }}</h3>

                    </div> </SplitterPanel>
                <SplitterPanel :size="85">
                    <Splitter>
                        <SplitterPanel class="flex items-center justify-center" :size="20">
                            <div v-for="profile in profiles" :key="profile.id" class="mb-4">
                                <!-- Creamos los datos para el gráfico basados en cada perfil -->
                                <Chart
                                    type="doughnut"
                                    :data="{
                                        labels: ['Finished', 'Pending'],
                                        datasets: [{
                                            data: [profile.ordersFinished, profile.ordersPending],
                                            backgroundColor: ['#36A2EB', '#FF6384'] // Opcional
                                        }]
                                    }"
                                    class="w-full md:w-[10rem]"
                                />
                            </div>
                        </SplitterPanel>
                        <SplitterPanel class="flex items-center justify-center" :size="80">
                            <div v-for="profile in profiles" :key="profile.id" class="mb-4">
                                <p><strong>Email:</strong> {{ profile.email }}</p>
                                <p><strong>Email:</strong> {{ profile.dni }}</p>

                            </div>
                        </SplitterPanel>
                    </Splitter>
                </SplitterPanel>
            </Splitter>
        </SplitterPanel>
    </Splitter>
</template>

<style scoped lang="scss">

</style>
