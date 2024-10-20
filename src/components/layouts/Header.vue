<template>
    <div class="header">
        <div class="container">
            <div class="header-container">
                <div class="header-left">
                    <a href="/" class="logo">Board</a>
                </div>
                <nav class="header-nav">
                    <ul>
                        <li><a href="/settings">Settings</a></li>
                    </ul>
                </nav>
                <div class="header-right">
                    <a href="#">Phone: 8(777)-777-77-77</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.header {
    display: grid;
    background-color: #333;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    &-container {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 40px;
        padding: 15px 0px;
    }

    &-left .logo {
        text-decoration: none;
        color: #fff;
        font-size: 24px;
    }

    &-nav {
        display: flex;
        flex-direction: column;
        justify-content: center;

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
        }

        li {
            margin-left: 20px;
            cursor: pointer;
        }

        a {
            text-decoration: none;
            color: #fff;
            font-size: 18px;
        }
    }

    &-right {
        align-self: flex-end;
        justify-self: end;
    }
}
</style>