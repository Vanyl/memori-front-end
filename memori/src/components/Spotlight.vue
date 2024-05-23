<template>
<div class="spotlight-container">
<img class="spotlight-img" src="@/assets/images/000002.JPG" alt="">
<div class="spotlight-info">
    <h3 class="spotlight-title">title spotlight</h3>
    <div class="spotlight-description-box"><p>description...</p></div>
    <p>You don't know what you're looking for ? Here's some explanation and suggestion to help.</p>
</div>
</div>
</template>

<script>

export default {
    name: 'Spotlight'
}

</script>

<style scoped>
.spotlight-container{
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
}

.spotlight-img{
    width :335px;
    height: 200px;
    object-fit: cover;
}

.spotlight-info{
    max-width: 25%
}

.spotlight-description-box{
    width: 230px;
    height: 100px;
    border: 1px solid black;
}

.spotlight-description-box p{
    margin: 5px;
}
</style>