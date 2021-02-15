//parecido com o a lista map do java com chave e valor (chave nao aceira repetiçoes)e você aplica sua logica

const tecnologia= new Map();

tecnologia.set('react', {framework: false})
tecnologia.set('angular', {framework: true})
tecnologia.set('vueJS', {framework: true})
tecnologia.set(123, 'numero')

console.log(tecnologia.get('react'))


//has--> para saber se determinado elemento está dentro do map

console.log(tecnologia.has(123))
tecnologia.delete(123)
console.log(tecnologia.has(123))
console.log(tecnologia.size)
