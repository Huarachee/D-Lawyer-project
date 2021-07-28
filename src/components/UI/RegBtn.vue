<template>
    <button class="reg-btn">
      <slot></slot> <!-- Всё, что мы будем писать в кнопках - будет записываться в этот слот -->
    </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.reg-btn{
  font-size: 16px;
  color: #007FEF;
  padding: 8px 14px 10px 14px;
  margin-top: 80px;
  background: inherit;
  border: 1px solid #007FEF;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
  transition: all .4s;
}

.reg-btn:hover{
  color: #ffffff;
  background-color: #222222;
}
</style>