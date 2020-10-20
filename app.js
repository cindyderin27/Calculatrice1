//DOM
//permet de recuperer toutes nos touches
const touches =[...document.querySelectorAll('.button')];

const Listekeycode= touches.map(touches=> touches.dataset.key);
//console.log(Listekeycode);

const ecran=document.querySelector('.ecran');
document.addEventListener('keydown',(e)=>
{
    const valeur= e.keyCode.toString();
    calculer(valeur)

})
document.addEventListener('click', (e)=>
{
    const valeur = e.target.dataset.key;
    calculer(valeur)
    //console.log(valeur, typeof valeur);
})

const calculer=(valeur)=>{
    if(Listekeycode.includes(valeur)){
        switch(valeur){
            case'8':
            ecran.textContent="";
            break;
            case'13':
            const calcul =eval(ecran.textContent);
            ecran.textContent=clacul;
            break;
            default:
                const indexKeycode=Listekeycode.indexOf(valeur);
                const touche =touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
    
    function insert (number){
        document.ecran.value+number;
    }

}

