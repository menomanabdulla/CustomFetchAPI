
let fetchData = URL =>{
    return new Promise((resolve,reject)=>{
        if(URL){
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var myArr = JSON.parse(this.responseText);
                    resolve(myArr);
                }
            };
            xmlhttp.open("GET", URL, true);
            xmlhttp.send();
        }else{
            reject(new Error('Error Occured'));
        }
    })
}
export default fetchData