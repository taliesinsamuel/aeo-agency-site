function manageSiteBannerVisibility() {
    const hiddenUntil = localStorage.getItem("attio-site-banner-hidden-until") ?? "0"

    if (parseInt(hiddenUntil, 10) < Date.now()) {
        document.documentElement.setAttribute("data-banner-visible", "true")
    } else {
        document.documentElement.removeAttribute("data-banner-visible")
    }
}

manageSiteBannerVisibility()
