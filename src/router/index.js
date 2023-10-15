import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DatachainView from "../views/DatachainView.vue";
import SoulbounderView from "../views/SoulbounderView.vue";
import PassTheTimeView from "../views/PassTheTimeView.vue";
import PlantMedicView from "../views/PlantMedicView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/datachain",
            name: "datachain",
            component: DatachainView,
        },
        {
            path: "/soulbounder",
            name: "soulbounder",
            component: SoulbounderView,
        },
        {
            path: "/passthetime",
            name: "passthetime",
            component: PassTheTimeView,
        },
        {
            path: "/plantmedic",
            name: "plantmedic",
            component: PlantMedicView,
        },
    ],
});

export default router;
