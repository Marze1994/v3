<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <span>name: </span>
      <input type="text" v-model="name" />
    </div>
    <div>
      <span>age: </span>
      <input type="number" v-model="age" />
    </div>
    <div>{{ showName }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  public name = '';
  public age = 2;

  public get showName() {
    return `Marze say: ${this.name}`;
  }
}
</script>

<style lang="scss" scoped></style>
