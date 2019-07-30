"use strict"

function BubbleSort(arr){
	for(let i=0,len=arr.length;i<len-1;i++){
		for(let j=i;j<len;j++){
			if(arr[i]>arr[j]){
				[arr[i],arr[j]]=[arr[j],arr[i]];
			}
		}
	}
}

//测试
let arr=[4,8,2,6,4,7,9,2,13,1];
BubbleSort(arr);
console.log(arr);//[1, 2, 2, 4, 4, 6, 7, 8, 9, 13]
