<template>
    <div class="header">
        <div class="container">
            <div class="header-container">
                <div class="header-left">
                    <router-link :to="{ name: 'home' }">
                        <a class="logo">Board</a>
                    </router-link>
                </div>
                <nav class="header-nav">
                    <ul>
                        <router-link :to="{ name: 'settings' }">
                            <li>
                                <a>Settings</a>
                            </li>
                        </router-link>
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
@import "@/styles/helpers/_variables.scss";

.header {
    display: grid;
    background-color: #333;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    @media (max-width: 480px) {
        font-size: $fz-xs;
    }

    &-container {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 40px;
        padding: 15px 0px;

        @media (max-width: 480px) {
            gap: 20px;
        }

    }

    &-left .logo {
        text-decoration: none;
        color: #fff;
        font-size: 24px;

        @media (max-width: 480px) {
            font-size: $fz-md;
        }

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

            @media (max-width: 480px) {
                font-size: $fz-xs;
            }

        }
    }

    &-right {
        align-self: flex-end;
        justify-self: end;
    }
}
</style>