import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/supplier/dashboard',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    redirect: '/landing'
                },
                {
                    path: '/supplier/dashboard',
                    name: 'dashboard',
                    component: () => import('@/public/views/Dashboard.vue')
                },
                {
                    path: '/supplier/orderlist',
                    name: 'orderlist',
                    component: () => import('@/suppliers/order-management/order-list/views/OrderList.vue')
                },
                {
                    path: '/supplier/new-orders',
                    name: 'neworderlist',
                    component: () => import('@/suppliers/order-management/order-list/views/NewOrderList.vue')
                },
                {
                    path:'/admin/Inventory',
                    name: 'inventory',
                    component:() => import('@/managers/stocks-management/stock-list/views/StockList.vue')
                },
                {
                    path: '/manager/bills',
                    name: 'bills',
                    component: () => import('@/managers/sale-management/bills-list/pages/invoice-list.component.vue')
                },
                {
                    path:'/supplier/notifications',
                    name: 'notifications',
                    component:() => import('@/suppliers/communications/notifications/views/Notifications.vue')
                },
                {
                    path: '/supplier/profile',
                    name: 'profile',
                    component: () => import('@/suppliers/user-management/profile/views/SupplierProfile.vue')
                },
                {
                    path: '/recipe',
                    name: 'recipe',
                    component: () => import('@/administrator/recipes/views/recipe-grid.component.vue')
                },
                {
                    path: '/recipe/recipeAdd',
                    name: 'RecipeAdd',
                    component: () => import('@/administrator/recipes/views/recipe-add.component.vue')
                },
                {
                    path: '/recipe/viewRecipe',
                    name: 'ViewRecipe',
                    component: () => import('@/administrator/recipes/views/view-recipe.component.vue')
                },
                {
                    path: '/orders',
                    name: 'Orders',
                    component: () => import('@/administrator/orders/views/order-view.component.vue')
                },
                {
                    path: '/orders/updateOrder',
                    name: 'UpdateOrder',
                    component: () => import('@/administrator/orders/views/order-update.component.vue')
                },
                {
                    path: '/orders/addOrder',
                    name: 'OrderAdd',
                    component: () => import('@/administrator/orders/views/order-add.component.vue')
                },
                {
                    path: '/uikit/formlayout',
                    name: 'formlayout',
                    component: () => import('@/views/uikit/FormLayout.vue')
                },
                {
                    path: '/uikit/input',
                    name: 'input',
                    component: () => import('@/views/uikit/InputDoc.vue')
                },
                {
                    path: '/uikit/button',
                    name: 'button',
                    component: () => import('@/views/uikit/ButtonDoc.vue')
                },
                {
                    path: '/uikit/list',
                    name: 'list',
                    component: () => import('@/views/uikit/ListDoc.vue')
                },
                {
                    path: '/uikit/tree',
                    name: 'tree',
                    component: () => import('@/views/uikit/TreeDoc.vue')
                },
                {
                    path: '/uikit/panel',
                    name: 'panel',
                    component: () => import('@/views/uikit/PanelsDoc.vue')
                },

                {
                    path: '/uikit/overlay',
                    name: 'overlay',
                    component: () => import('@/views/uikit/OverlayDoc.vue')
                },
                {
                    path: '/uikit/media',
                    name: 'media',
                    component: () => import('@/views/uikit/MediaDoc.vue')
                },
                {
                    path: '/uikit/message',
                    name: 'message',
                    component: () => import('@/views/uikit/MessagesDoc.vue')
                },
                {
                    path: '/uikit/file',
                    name: 'file',
                    component: () => import('@/views/uikit/FileDoc.vue')
                },
                {
                    path: '/uikit/menu',
                    name: 'menu',
                    component: () => import('@/views/uikit/MenuDoc.vue')
                },
                {
                    path: '/uikit/charts',
                    name: 'charts',
                    component: () => import('@/views/uikit/ChartDoc.vue')
                },
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    component: () => import('@/views/uikit/MiscDoc.vue')
                },
                {
                    path: '/uikit/timeline',
                    name: 'timeline',
                    component: () => import('@/views/uikit/TimelineDoc.vue')
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('@/views/pages/Empty.vue')
                },
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('@/views/pages/Crud.vue')
                },
                {
                    path: '/documentation',
                    name: 'documentation',
                    component: () => import('@/views/pages/Documentation.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/landing/landing.component.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/pages/login.component.vue')
        },

        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/pages/register.component.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

export default router;
