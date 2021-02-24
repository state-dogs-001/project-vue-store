<template>
  <div class="home">
    <v-container>
      <v-row class="text-center">
        <v-col
          v-for="index in this.$store.state.goodsList"
          :key="index"
          cols="12"
          md="4"
        >
          <stock
            :image="index.img"
            :title="index.title"
            :price="index.price"
            @orderBuy="cBuy"
            @orderCancel="cCancel"
          />
        </v-col>
        <v-col>
          <v-dialog v-model="dialog" persistent max-width="400px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="green"
                style="margin-bottom: 30px"
                dark
                v-bind="attrs"
                v-on="on"
              >
                <span class="mr-2">basket</span>
                <v-icon>mdi-cart-outline</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Order List</span>
              </v-card-title>
              <v-card-text>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Name</th>
                        <th class="text-left">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="find in listProduct" :key="find">
                        <td class="text-left">{{ find.nameProduct }}</td>
                        <td class="text-left">{{ find.priceProduct }} ฿</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <br />

                <h2 class="text-end">
                  Total = {{ this.$store.state.allPrice }}
                </h2>
              </v-card-text>

              <v-card-actions>
                <v-col
                  ><v-btn color="red darken-1" dark @click="dialog = false">
                    Exit
                  </v-btn></v-col
                >
                <v-spacer />
                <v-col
                  ><v-btn color="green darken-1" dark @click.once="calClick">
                    Calculate
                  </v-btn></v-col
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import stock from "@/components/MarketComponent.vue";
export default {
  name: "Home",
  components: {
    stock
  },
  props: {
    nameProduct: String,
    priceProduct: Number,
    numberProduct: Number
  },
  data: () => ({
    dialog: false,
    listProduct: []
  }),
  methods: {
    cBuy(value) {
      this.listProduct.push(value);
      this.$store.state.arrayPrice.push(value.priceProduct);
    },
    cCancel(value) {
      this.listProduct.pop(value);
      this.$store.state.arrayPrice.pop(value.priceProduct);
    },
    calClick() {
      for (var i = 0; i < this.$store.state.arrayPrice.length; i++) {
        this.$store.state.allPrice += this.$store.state.arrayPrice[i];
      }
      alert("หากต้องการเพิ่มสินค้ากรุณากดปุ่มรีเฟรช!!");
    }
  }
};
</script>
