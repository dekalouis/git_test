function calculate() {
    for (let i = 1; i <10; i++) {
        const newRes = `${i} x ${i} = ${i*i}`
        console.log(newRes);
    }
}


const cats = ["Leopard","Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
    console.log(cat);
}

for (let x = 0; x < cats.length; x++) {
    console.log(cats[x]);
}