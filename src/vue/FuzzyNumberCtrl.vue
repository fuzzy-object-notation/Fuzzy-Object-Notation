<!--實做內容:FN設定 -->
<!--FN實做：[[FN_Name,a1,a2,a3,a4],...]-->
<!-- -->


<script>
export default {
	name: "FN_Ctrl",
	data() {
		return {
			GetInput:  { FN:"FuzzyIn01", Type:"in", scale:1, NodeData:[0,1,2,3] }, // (綁定)
			Hint: {Active:false,Text},
			SaveData : [
				{
					FS:          "Fuzzy01" , //Fuzzy Sets
					Type:        "in"      , //類型
					DomainLeft:  0         , //下限
					DomainRight: 10        , //上限 

					FuzzyTerm: [
						{ FN:"梯形" ,Scale:1 ,NodeData: [0,1,2,3] }, //單一FN資訊
					]

				}
			]
	};
},
  created:{
	//GetJsonFile
  },
  updated:{
		CheckInput:function CheckInput(){
			this.Hint.Active = false;

			/* Fuzzy Number 高度檢查 */
			if(this.GetInput.scale<0){
				this.Hint.Active = true;
				this.Hint.Text   = "Fuzzy Number高度不可小於0";
			}
			
			/* Fuzzy Number 輸入檢查 */
			if(isNaN(this.GetInput.NodeData[0])){
				this.Hint.Active = true;
				this.Hint.Text   = "輸入a需要為數值";
			}
			else if(isNaN(this.GetInput.NodeData[1])){
				this.Hint.Active = true;
				this.Hint.Text   = "輸入b需要為數值";
			}
			else if(isNaN(this.GetInput.NodeData[2])){
				this.Hint.Active = true;
				this.Hint.Text   = "輸入c需要為數值";
			}
			else if(isNaN(this.GetInput.NodeData[3])){
				this.Hint.Active = true;
				this.Hint.Text   = "輸入d需要為數值";
			}

			/* Fuzzy Number 值域檢查[警告] */
			if(this.GetInput.NodeData[0]>this.GetInput.NodeData[1] || this.GetInput.NodeData[1]>this.GetInput.NodeData[2] || this.GetInput.NodeData[3]>this.GetInput.NodeData[2]){
				this.Hint.Active = true;
				this.Hint.Text   = "值域需滿足梯形節點a≦b≦c≦d規範";
			}

			/* Fuzzy Number 存在檢[警告] */
			if(this.GetInput.NodeData[0]==this.GetInput.NodeData[1] && this.GetInput.NodeData[1]==this.GetInput.NodeData[2] && this.GetInput.NodeData[2]==this.GetInput.NodeData[3]){
				this.Hint.Active = true;
				this.Hint.Text   = "不可為脈衝訊號";
			}
			
		},
  },
  methods: {
	count: function() {
	  this.love += 1;
	}
  }
};
</script>
