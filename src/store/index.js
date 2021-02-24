import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allPrice: 0,
    arrayPrice: [],
    goodsList: [
      {
        img:
          "https://www.battlefieldbeers.co.uk/clear_cf/pub-media-catalog-product-c-o-coke_can_2000x0.jpg",
        title: "Coke",
        price: 18
      },
      {
        img: "https://cf.shopee.co.th/file/68075f364cf7f0647536dda30a1fdaaf",
        title: "Pepsi",
        price: 15
      },
      {
        img: "https://images.heb.com/is/image/HEBGrocery/000561259",
        title: "Monster",
        price: 40
      },
      {
        img:
          "https://5.imimg.com/data5/UE/NE/WQ/SELLER-82456434/sprinte-cold-derink-500x500.jpg",
        title: "Sprint",
        price: 17
      },
      {
        img: "https://cf.shopee.co.th/file/8559d8a545248e0a7b85fad836c62150",
        title: "C-vitt",
        price: 16
      },
      {
        img:
          "https://backend.tops.co.th/media/catalog/product/8/8/8850228002025_e21-07-2020.jpg",
        title: "Mansome",
        price: 20
      },
      {
        img:
          "https://secure.ap-tescoassets.com/assets/TH/432/8851717907432/ShotType1_540x540.jpg",
        title: "Dutch Mill Hight Protien",
        price: 42
      },
      {
        img:
          "https://gda.thai-tba.or.th/wp-content/uploads/2018/07/mm-mandarin-pet-335-ml-th-new.png",
        title: "Minute Maid",
        price: 21
      },
      {
        img:
          "https://secure.ap-tescoassets.com/assets/TH/669/8854698009669/ShotType1_540x540.jpg",
        title: "Oishi Green Tea",
        price: 22
      }
    ]
  }
});
