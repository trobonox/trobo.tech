<template>
    <div class="md:flex flex-col hidden">
        <div class="relative inline-block">
            <img
                src="../../public/profile_picture.jpg"
                alt="Trobonox Profile Picture"
                class="rounded-full w-48 h-48 object-cover"
            />
            <span v-if="!offline" class="w-8 h-8 rounded-full bg-emerald-500 border-2 border-emerald-600 absolute right-4 bottom-0.5" />
            <span v-else class="w-8 h-8 rounded-full bg-gray-500 border-2 border-gray-600 absolute right-4 bottom-0.5" />
        </div>
        <div
            class="mt-8 py-2 px-8 bg-gray-700 rounded-md text-center self-center w-fit"
        >
            Status: <span class="font-bold"
                >{{ lanyard?.data.discord_status }}</span
            >
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';

    const lanyard_url = "https://api.lanyard.rest/v1/users/540898474288480256";
    const lanyard = ref(null);

    onMounted(async () => {
        lanyard.value = await fetch(lanyard_url).then((response) => response.json());
    });

    const offline = computed(() => {
        if (lanyard.value == null) return false;

        //@ts-ignore
        lanyard.value.data.discord_status === "offline"
    })
</script>