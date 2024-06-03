import { createRouter, createWebHistory } from 'vue-router';
import AdminRoutes from './AdminRoutes';
import UserRoutes from './UserRoutes';
import AuthRoutes from './AuthRoutes';
import { useAuthStore } from '@/stores/auth';
import { useUIStore } from '@/stores/ui';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/auth/login'
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/pages/maintenance/error/Error404Page.vue')
        },
        {
            path: '/portalsite',
            component: () => import('@/views/pages/underconstruction/UnderConstruction.vue')
        },
        {
            path: '/help',
            component: () => import('@/views/pages/underconstruction/UnderConstruction.vue')
        },
        AdminRoutes,
        UserRoutes,
        AuthRoutes
    ]
});

interface User {
    // Define the properties and their types for the user data here
    // For example:
    id: number;
    name: string;
}

// Assuming you have a type/interface for your authentication store
interface AuthStore {
    user: User | null;
    returnUrl: string | null;
    login(username: string, password: string): Promise<void>;
    logout(): void;
}

router.beforeEach(async (to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/auth/login'];
    const authRequired = !publicPages.includes(to.path);
    const auth: AuthStore = useAuthStore();

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (authRequired && !auth.user) {
            auth.returnUrl = to.fullPath;
            return next('/auth/login');
        } else next();
    } else {
        next();
    }
});

router.beforeEach(() => {
    const uiStore = useUIStore();
    uiStore.isLoading = true;
});

router.afterEach(() => {
    const uiStore = useUIStore();
    uiStore.isLoading = false;
});
