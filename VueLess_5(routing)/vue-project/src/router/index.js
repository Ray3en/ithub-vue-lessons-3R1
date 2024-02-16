import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import ContactsView from '../views/ContactsView.vue'
import EmailContent from '../components/EmailContent.vue'
import PhoneContent from '../components/PhoneContent.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/about/:title?',
            component: AboutView,
            props: (route) => ({
                title: route.params.title.toUpperCase(),
                value: route.params.value
            })
        },
        {
            path: '/contacts',
            component: ContactsView,
            children: [
                {
                    path: 'email',
                    component: EmailContent,
                    props: (route) => ({
                        email: route.params.email
                    })
                },
                {
                    path: 'phone',
                    component: PhoneContent,
                    props: (route) => ({
                        phone: route.params.phone
                    })
                },
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundView
        }
    ]
})


export default router