<template>
  <div>
    <v-card class="mx-auto my-8" max-width="800">
      <v-img class="white--text align-end" height="400px" :src="image"> </v-img>

      <v-card-text class="pb-0"
        ><h1>{{ title }}</h1></v-card-text
      >

      <v-card-text class="pb-0"
        ><h2>{{ price }} ฿</h2></v-card-text
      >

      <br />

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green" dark @click="buyClick"
          ><v-badge color="green" :content="count"><h3>Buy</h3></v-badge></v-btn
        >
        <v-btn color="red" dark @click="cancelClick"><h3>Cancel</h3></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Store",
  props: {
    image: String,
    title: String,
    price: Number
  },
  data: () => ({
    count: 0
  }),
  methods: {
    buyClick() {
      this.$emit("orderBuy", {
        nameProduct: this.title,
        priceProduct: this.price,
        numberProduct: (this.count += 1)
      });
    },
    cancelClick() {
      if (this.count > 0) {
        this.$emit("orderCancel", {
          nameProduct: this.title,
          priceProduct: this.price,
          numberProduct: (this.count -= 1)
        });
      }
    }
  }
};
</script>
