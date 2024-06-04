<template>
  <div class="loader-box">
    <span class="loader-box-item">
        <img :src="icon" alt="" class="loader-icon">
    </span>
  </div>
</template>

<script>

export default {
    name: 'Loader',
    data() {
        return {
            icon: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/loading-icon.png?alt=media&token=1f7e73a5-d781-4292-954e-e5741d98c352'
        }
    }
}

</script>

<style lang="scss" scoped>

@keyframes loaderLoop {
    from {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.loader-box {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    &-item {
        max-width: 40px;
        width: 100%;
        pointer-events: none;
        user-select: none;
        animation: loaderLoop .5s linear infinite;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            pointer-events: none;
        }
    }
}

</style>