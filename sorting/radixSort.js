function numLength(num){
    let tam=1;
    while(num >10){
        num=Math.floor(num/10);
        tam++;
    }
    return tam;
}
function getDigit(num,place){
    if(place==0){
        return num%10;
    }
    return getDigit(Math.floor(num/10),place-1);
}

function radixSort(arr){
    let buckets = {};
    for(let i=0;i<10;i++){
        buckets[i]=new Array();
    }
    let maximo = 0;
    for(let i=0;i<arr.length;i++){
        if(numLength(arr[i])>maximo){
            maximo=numLength(arr[i]);
        } 
    }
    for(let k=0;k<maximo;k++){
        for(let i=0;i<arr.length;i++){
            buckets[getDigit(arr[i],k)].push(arr[i]);
        }
        arr=[]
        for(index in buckets){
            console.log("estamos en el bucket ",index," : ",buckets[index],"\n" );
            while(buckets[index].length > 0){
                arr.push(buckets[index].shift());
            }
        }
        console.log("el arreglo resultante es :",arr,'\n'); 
    }
    return arr;
}

radixSort([11232,323,21,32,1,2,3,232,3,3,4,3,4,3,123213,3,4])

