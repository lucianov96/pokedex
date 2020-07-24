Vue.component('pokemon', {
    props: ['poke'],
    methods: {
        seleccionarpoke(){
           this.$emit('seleccionar', this.poke.id); 
        }
    },
    template: /* html */ `
    <figure class="figure text-center col-md-4 col-sm-6 col-xs-12">
        <a href="#dos"><img :src="poke.img" alt="foto" class="figure-img pokemon-pick img-fluid" @click="seleccionarpoke"></a>
        <figcaption class="figure-caption">{{poke.name}}</figcaption>
    </figure>
    `
})