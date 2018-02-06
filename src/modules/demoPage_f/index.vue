<template>
	<div class="this_out">
      <div id="myDiv" style="width:480px; height:400px;border:2px solid #333333;">
      	<br/>
      	<br/>
      	name<input v-model="name" value=""/>
      	<br/>
      	<br/>
      	password<input v-model="password" value=""/>
      	<br/>
      	<br/>
      	<input type="button" value="submit" @click="sbmit"/>
      	<br/>
      	<br/>
      	phone_number<input v-model="phoneNumber" value=""/>
      	<br/>
      	<br/>
      	<input type="button" value="reg" @click="reg"/>
      </div>
   </div>
</template>
<script>
  import $ from 'jquery'
  //import  Plotly from '../../components/js/plotly.min.js'
  export default {
    data() {
      return {
      	name:'',
      	password:'',
      	phoneNumber:''
      }
     },
     mounted(){
     	//this.start();
     	//console,,,,+++
    },
    methods: {
      reg(){
      	this.$http.post("http://localhost:3000/register",{phoneNumber:this.phoneNumber},{emulateJSON: true})
            .then(
              (response)=>{
                console.log(response); 
              },
              (error)=>{
                console.log(error);
              }
            );
      },
      sbmit(){
      	this.$http.post("http://localhost:3000/login",{myName:this.name,myPwd:this.password},{emulateJSON: true})
            .then(
              (response)=>{
                console.log(response); 
              },
              (error)=>{
                console.log(error);
              }
            );
      },
      start(){
      	var data = [{
                x: ['giraffes', 'orangutans', 'monkeys'],
                y: [20, 14, 23],
                type: 'bar'
            }];

        Plotly.newPlot('myDiv', data);
      }
    }
  }
</script>
<style>
.this_out{
	width:100%;
	height:600px;
	background-color: #ffffff;
}
</style>