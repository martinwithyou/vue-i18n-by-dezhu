<style scoped>  
.vue_location{
  	width:100%;
  	height:30px;
  	border-bottom:1px solid #f2f2f2;
  	padding-left:20px;
  	line-height:30px;
  	color:#666666;
  	background: #f2f2f2;
  	font-size:14px !important;
  	float:left;
}
.form_area{
	width:100%;
	height:200px;
	padding-top:20px;
	background-color: #ffffff;
}
</style>  
<template>
	<div> 
		<!----------------------------->
		<div class="vue_location" v-text="location"></div>
		<!----------------------------->
		<div class="form_area">
			<c-form></c-form>
		</div>
		
		<!----------------------------->
		<c-table></c-table>
  </div>
</template>


<script>
  import CForm from 'modules/page2/components/form_component/form'
  import CTable from 'modules/page2/components/table_component/table'
  export default {
  	components:{
  		CForm,
  		CTable,
  	},
    data() {
    	
      return {
        
        location:"您的位置    >  任务分配    >  待签收任务分配",

      }
      
    },
  	mounted(){
  		
  	
  	},
    methods: {

 
    }
  }
</script>
