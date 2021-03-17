<template>
  <div class="button-container">
    <div class="stick stick-1"></div>
    <div class="stick stick-2"></div>
    <div class="stick stick-3"></div>
  </div>
</template>

<style scoped>
.button-container {
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    cursor: pointer;
}

.stick {
    width: 80px;
    height: 8px;
    border-radius: 4px;
    margin-bottom: 15px;
    background-color: #2dfd89;
    display: inline-block;
}

.stick:last-child {
    margin-bottom: 0px;
}

.stick-1.open {animation: stick-1-open .6s ease-out forwards;}

.stick-2.open {animation: stick-2-open .6s linear forwards;}

.stick-3.open {animation: stick-3-open .6s linear forwards;}

@keyframes stick-1-open {
    0% {width: 80px;}
    40% {}
}
</style>