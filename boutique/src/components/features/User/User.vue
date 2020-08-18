<template>
    <div class="d-flex flex-row">
        <transition name="left" appear>
            <Shop class="w-75"></Shop>
        </transition>
        <transition name="right" appear>
            <Cart class="w-25"></Cart>
        </transition>
    </div>
</template>

<script>
import Shop from './Shop/Shop'
import Cart from './Cart/Cart'

export default {
    components: {
        Shop,
        Cart
    }
}
</script>

<style scoped>
    @keyframes fromleft {
        from {
            /* transform: translateX(-20px); */
            transform: rotate(-180deg);
        }
        to {

        }
    }

    @keyframes fromright {
        from {
            transform: translateX(20px);
        }
        to {
            
        }
    }
    .left-enter-active{
        animation: fromleft 1s;
    }

    .right-enter-active{
        animation: fromright 1s;
    }
</style>
