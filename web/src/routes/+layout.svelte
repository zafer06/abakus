<script>
    import {page} from '$app/stores'
    let path;

    function getPath(currentPath) {
        path = currentPath;
        console.log(path);
    }

    $: getPath($page.url.pathname);

    //console.log($page.url.pathname);
</script>


<header>
    <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="/">Abakus</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" class:active="{$page.url.pathname == '/'}" aria-current="page" href="/">Hesapla</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" class:active="{$page.url.pathname == '/about'}" href="/about">Hakkında</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Github</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>

<main class="mt-4">
    <slot />
</main>

<footer>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12 text-center">
                Abaküs -- Finansal Hesap Makinesi, Ankara 2021
                <br>
                Sürüm: 0.4.0
            </div>
        </div>
    </div>
</footer>
