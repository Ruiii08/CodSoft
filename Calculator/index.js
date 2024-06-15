let string="";
let buttons = document.querySelectorAll('.but');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            try{
                string = eval(string);
            } catch(error){
                string = 'ERROR';
            }            
            document.querySelector('input').value = string;
        } else if(e.target.innerHTML=='AC'){
            string = "";
            document.querySelector('input').value = string;
        }else {
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    });
})