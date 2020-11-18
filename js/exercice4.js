let modulePerson = (function(){

    let name
    let surname
    let age

function setInfos(nameparam, surnameparam, ageparam){
    name = nameparam
    surname = surnameparam
    age = ageparam
}

function getInfos (){
    return 'Je m appelle ' + name + ' ' +surname + ' et j ai ' + age + ' ans.'
}

return {
    setInfos: setInfos,
    getInfos: getInfos
}
}) ()

modulePerson.setInfos('Nicolas', 'Hie', 21)
console.log(modulePerson.getInfos())