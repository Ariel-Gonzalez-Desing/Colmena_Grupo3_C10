console.log('linkeado correctamente');

const $$ = id => document.getElementById(id);

$$('buscar').addEventListener('click', e => {
    
    e.preventDefault();
    $$('buscar').elements[0].value!='' && $$('buscar').submit()
})