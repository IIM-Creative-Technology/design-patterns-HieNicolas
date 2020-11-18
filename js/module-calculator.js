let moduleCalculator = (() => {

    let total = 0

    function add(number) {
        validateNumber(number)
        total += number
    }

    function remove(number) {
        validateNumber(number)
        total -= number
    }

    function getTotal() {
        return total
    }

    function validateNumber(number) {
    }

    return {
        add: add,
        remove: remove,
        getTotal: getTotal
    }

})()

console.log(moduleCalculator)
moduleCalculator.add(2)
moduleCalculator.add(3)
moduleCalculator.remove(5)