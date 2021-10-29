<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
                        <div class="flex place-content-end mb-4">
                            <div class="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                                <router-link :to="{ name: 'posts.create' }" class="text-sm font-medium">Create Post</router-link>
                            </div>
                        </div>

                        <table class="min-w-full border divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th class="px-6 py-3 bg-gray-50">
                                        <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Titre</span>
                                    </th>
                                    <th class="px-6 py-3 bg-gray-50">
                                        <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Texte</span>
                                    </th>
                                    <th class="px-6 py-3 bg-gray-50">
                                        <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Image</span>
                                    </th>
                                    <th class="px-6 py-3 bg-gray-50">
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                                <tr  v-for="post in posts" :key="post.id" class="bg-white">
                                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                                        {{ post.title }}
                                    </td>
                                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                                        {{ post.text }}
                                    </td>
                                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                                        {{ post.image }}
                                    </td>
                                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                                        <router-link :to="{ name: 'posts.edit', params: {id: post.id}}"
                                                     class="mr-2 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                                            Edit
                                        </router-link>
                                        <button @click="deletePost(post.id)"
                                                class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                                            Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import usePosts from "../../composables/posts";
import { onMounted } from "vue";

export default {
    setup() {
        const { posts, getPosts, destroyPost } = usePosts();

        onMounted(getPosts);

        const deletePost = async (id) => {
            if(!window.confirm('Are you cereal ?')) {
                return;
            }

            await destroyPost(id);
            await getPosts();
        }

        return {
            posts,
            deletePost,
        }
    }
}
</script>
