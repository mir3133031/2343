let moshinBozor = [
    {
        name: 'malibu',
        price: 24000
    },
    {
        name: 'Matiz',
        price: 3500
    },
    {
        name: 'tahoe',
        price: 80000
    },
    {
        name: 'Nexia',
        price: 10000
    },
    {
        name: 'Gentra',
        price: 15000
    },
    {
        name: 'tracker',
        price: 22000
    }
] 


let from = prompt(`from` )
let to = prompt(`to`)
let final = moshinBozor.filter(item => item.price >= from && item.price <= to)
