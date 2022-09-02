<script>
    import Navbar from "../../components/Navbar.svelte";
    import Categories from "$lib/Categories.svelte";
    import Footer from "../../components/Footer.svelte";
    import CategoryNavbar from "$lib/CategoryNavbar.svelte";
    import { onMount } from "svelte";
    let apiURL = "https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=bfe56e2a8c7c48aaa852c796a404edf1";
    let articles = [];

    onMount(async() => {
        fetch(apiURL).then(response => response.json()).then(data => {
            articles = data.articles;
        });
    })
</script>

<Navbar />
<CategoryNavbar />
<Categories />

{#each articles as article}
    <div class="absolute inline-block rounded left-9 -top-[19.2rem] sm:left-80 md:left-80 w-72 sm:w-[40rem] md:w-[40rem] h-80 md:h-60 sm:h-60 bg-white drop-shadow-md relative mx-3 my-1">
        <h1 class="absolute ml-auto mr-auto left-0 right-0 text-center font-bold mt-2 p-2 text-gray-600">{article.title.replace(/-.*$/,"").slice(0,70)}{article.title.length > 70 ? "..." : ""}</h1>
        <p class="absolute ml-auto mr-auto left-0 right-0 text-center top-20 sm:top-16 md:top-16 p-3">{article.description.length > 200 ? article.description.substring(0,200) + "..." : article.description}</p>
        <a href="{article.url}" class="relative inline-block sm:top-44 md:top-44 top-64 w-10 h-10 bg-gray-100 left-3 my-2 rounded shadow-md bottom-0">
            <i class="relative left-1/2 -translate-x-1/2 text-xl text-gray-600 top-1.5 fa-solid fa-eye"></i>
        </a>
    </div>
{/each}

<Footer />