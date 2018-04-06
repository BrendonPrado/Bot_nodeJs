const exe =(c,...midw) => {
    const run = ind => {
        midw && ind < midw.length && midw[ind](c,() => run(ind+1))
    }
    run(0)
}

const mid1 = (c, next) =>{
    c.info = 'mid1'
    next()
}

const mid2 = (c, next) =>{
    c.info2 = 'mid2'
    next()
}

const mid3 = c => c.info3 = 'mid3'

const c = {}
exe(c, mid1, mid2, mid3)
console.log(c)