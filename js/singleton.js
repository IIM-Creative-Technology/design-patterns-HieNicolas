let singletonShopList = (function(){

    let instance

    function init(){

        let list = []

        function getList(){
            return list
        }

        function addItem(item, quantity){
           
            if(typeof quantity !== 'number'){
                throw new Error('Quantity must be a number')
            }

            list.push({
                'item' : item,
                'quantity' : quantity,
            }  )}

            function cleanList(){
                list = []
            }

            function removeItem(item){
                list.forEach(function (listItem){
                    if(listItem.item === item){
                        delete list[list.indexOf(listItem)]
                    }
                })
            }

        return{
            getList : getList,
            getNomberOfItems : function(){
                return list.length
            },

            addItem : addItem,
            cleanList : cleanList,
            removeItem : removeItem,
        }
    }

    function getInstance(){
        if (!instance){
            instance = init()
        }
        return instance
    }

    return{
        getInstance : getInstance
    }

})()

let shopList = singletonShopList

shopList.getInstance().addItem('riz', 1)
shopList.getInstance().addItem('PQ', 6)
shopList.getInstance().addItem('gateaux', 2)

console.log('items: ', shopList.getInstance().getNomberOfItems())
console.table(shopList.getInstance().getList())

console.log('going to shop')
//shopList.getInstance().cleanList()
shopList.getInstance().removeItem('PQ')
console.log('items: ', shopList.getInstance().getNomberOfItems())
console.table(shopList.getInstance().getList())