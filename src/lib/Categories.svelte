<script>
    let categories = [
        {
            "icon": "fa-solid fa-briefcase",
            "name": "İş Dünyası",
            "href": "/is-dunyasi"
        },
        {
            "icon": "fa-solid fa-face-smile",
            "name": "Eğlence",
            "href": "/eglence"
        },
        {
            "icon": "fa-solid fa-briefcase-medical",
            "name": "Sağlık",
            "href": "/saglik"
        },
        {
            "icon": "fa-solid fa-flask",
            "name": "Bilim",
            "href": "/bilim"
        },
        {
            "icon": "fa-solid fa-baseball",
            "name": "Spor",
            "href": "/spor"
        },
        {
            "icon": "fa-solid fa-robot",
            "name": "Teknoloji",
            "href": "/teknoloji"
        }
    ]
</script>

<div class="w-60 h-96 bg-white drop-shadow-md relative top-20 rounded left-10 invisible md:visible sm:visible">
    <h2 class="relative text-center font-extrabold text-xl top-3">Kategoriler</h2>
    {#each categories as category}
        <div class="relative w-52 h-10 bg-gray-300/20 rounded left-1/2 -translate-x-1/2 top-7 shadow-sm transition hover:scale-110 hover:shadow-md my-2 text-gray-600">
            <a href="{category.href}" class="relative left-5 top-1.5"><i class="{category.icon}"></i> {category.name}</a>
        </div>
    {/each}
</div>
