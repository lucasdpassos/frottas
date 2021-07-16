<template>
   
    <div style="display:flex;justify-content:center;flex-direction:column;align-items:center;margin-top:10%;">
    <p style="color:azure;font-size:29px;">Faça seu orçamento nos botões abaixo:</p>
    <v-container style="width:1500px;height:700px;display:flex;justify-content:center;align-items:center;flex-direction:row;">
    <a href="https://wa.me/5521982835588?&text=Eu%20gostaria%20de%20solicitar%20um%20orçamento%20da%20Frottas">
    <v-img  v-animate-onscroll.repeat="'animated flip'" style="max-width:320px;max-height:250px;" src="../assets/zap.png" />
    </a>
    <a href="https://wa.me/5521971835588?&text=Eu%20gostaria%20de%20solicitar%20um%20orçamento%20da%20Frottas">
    <v-img v-animate-onscroll.repeat="'animated flip'" style="max-width:320px;max-height:250px;" src="../assets/zap.png" />
    </a>
    </v-container>
    <div style="background-color:black;width:100%;color:#C6972C;text-align:center;">2021 - Frottas - 20.079.255/0001-07 - Rio de Janeiro</div>
    </div>
</template>

<script>


export default {
  name: 'First',

  components: {
   //
  },

  data: () => ({
    //
  }),
};
</script>


<style>
  @import './stylesheet.css';
</style>