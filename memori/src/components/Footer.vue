<template>
    <footer id="footer">
        <div class="menu-footer">
            <div class="footer-line-1">
                <div class="footer-text">text</div>
                <div class="footer-language">english</div>
                <div class="footer-contact-us">
                    <span>contact us <font-awesome-icon :icon="['fas', 'camera']" size="xs" /></span>
                </div>
            </div>
            <div class="footer-line-2">
                <span class="copyright">© {{ new Date().getFullYear() }} memori</span>
            </div>
        </div>
    </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCamera, faFilm } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

export default {
    name: 'Footer',
    components: {
        FontAwesomeIcon
    },
    setup() {
        library.add(faCamera);
    },
};
</script>

<style scoped>
#footer {
    padding: 0 15px;
    border-top: 1px solid black;
    
}

.menu-footer{
    display: grid;
    padding: 20px;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.footer-line-1,
.footer-line-2{
    display: contents;
}

.footer-text,
.footer-language,
.footer-contact-us {
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer-line-2 {
    grid-column: 2 / 3;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer-contact-us {
    width: 145px;
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background:
        linear-gradient(to right, black 1px, transparent 1px) 0 0,
        linear-gradient(to right, black 1px, transparent 1px) 0 100%,
        linear-gradient(to left, black 1px, transparent 1px) 100% 0,
        linear-gradient(to left, black 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, black 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, black 1px, transparent 1px) 100% 0,
        linear-gradient(to top, black 1px, transparent 1px) 0 100%,
        linear-gradient(to top, black 1px, transparent 1px) 100% 100%;
    background-repeat: no-repeat;
    background-size: 5px 5px;
}

.footer-contact-us:hover{
    background-color: grey;
}

@media only screen and (min-width: 768px) {
    #footer {
        height: 200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
    }

    .menu-footer{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        text-align: center;
        padding: 20px; 
        justify-items: center;
    }

    .footer-contact-us {
        width: 215px;
        height: 50px;
    }

    .footer-line-2 {
        width: 150px;
    }
}

</style>