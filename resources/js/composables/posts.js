import { ref } from 'vue';
import axios from "axios";
import { useRouter } from "vue-router";

export default function usePosts() {
    const router = useRouter();

    const posts = ref([]);
    const post = ref({});
    const errors = ref('');

    async function getPosts() {
        let response = await axios.get('/api/posts');
        posts.value = response.data.data;
    }

    async function getPost(id) {
        let response = await axios.get('/api/posts/' + id);
        post.value = response.data.data;
    }

    async function storePost(data) {
        errors.value = '';
        try {
            await axios.post('/api/posts/', data);
            await router.push({ name: 'posts.index' });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = '';
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    async function updatePost(id) {
        errors.value = '';
        try {
            await axios.put('/api/posts/' + id, post.value);
            await router.push({ name: 'posts.index' });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = '';
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    async function destroyPost(id) {
        await axios.delete('/api/posts/' + id);
    }

    return {
        posts,
        post,
        errors,
        getPosts,
        getPost,
        storePost,
        updatePost,
        destroyPost,
    }
}
