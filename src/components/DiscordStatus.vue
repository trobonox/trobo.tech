<template>
    <div class="md:flex flex-col hidden">
        <div class="relative inline-block">
            <img
                src="../../public/profile_picture.jpg"
                alt="Trobonox Profile Picture"
                class="rounded-full w-48 h-48 object-cover"
            />
            <span v-if="!offline" data-text="Discord Status: online" class="tooltip w-8 h-8 rounded-full bg-emerald-500 border-4 border-emerald-600 absolute right-4 bottom-0.5" />
            <span v-else data-text="Currently offline" class="tooltip w-8 h-8 rounded-full bg-gray-500 border-4 border-gray-600 absolute right-4 bottom-0.5" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, onMounted, Ref, ref } from 'vue';

    const lanyard_url = "https://api.lanyard.rest/v1/users/540898474288480256";
    const lanyard: Ref<any> = ref(null);

    onMounted(async () => {
        lanyard.value = await fetch(lanyard_url).then((response) => response.json());
    });

    const offline = computed(() => {
        if (lanyard.value === null) return false;

        //@ts-ignore
        return lanyard.value.data.discord_status === "offline";
    })
</script>

<style scoped>
.tooltip:before {
    content: attr(data-text);
    position: absolute;

    top: 180%;
    right: -100%;

    margin-left: 15px;

    width: 200px;
    padding: 10px;
    border-radius: 10px;
    background: #1a1a1a;
    color: rgb(190, 207, 230);
    text-align: center;

    display: none;    
}

.tooltip:hover:before {
    display: block;
}
</style>