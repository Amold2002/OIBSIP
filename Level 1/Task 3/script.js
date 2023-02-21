const calculateTemp=()=>{
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp=  tempSelected.options[tempSelected.selectedIndex].value;

    const celToFah = (cel)=>{
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }
    const fahToCel = (fah)=>{
        let celsius  = Math.round((fah-32)*5/9);
        return celsius;
    }

    let result ;
    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('result').innerHTML=`= ${result} °F`
    }else{
        result = fahToCel(numberTemp);
        document.getElementById('result').innerHTML=`= ${result} °C`
    }


}