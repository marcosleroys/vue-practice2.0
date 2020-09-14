var menu = new Vue({
        el: '#menu',
        data: {
                activeHome: true,
                activeProducts: false,
                activeServices: false
        },
        methods: {
                menu: function(o){
                        switch(o){
                                case 'home':
                                        this.activeHome = true;
                                        this.activeProducts = false;
                                        this.activeServices = false;
                                        $forceUpdate();
                                        break;
                                case 'products':
                                        this.activeHome = false;
                                        this.activeProducts = true;
                                        this.activeServices = false;
                                        $forceUpdate();
                                        break;
                                case 'services':
                                        this.activeHome = false;
                                        this.activeProducts = false;
                                        this.activeServices = true;
                                        $forceUpdate();
                                        break;
                        }
                }
        },
        computed: {
                activeServices: function(){
                        return this.activeServices;
                }
        }

});

var demo = new Vue({
        el: '#app',
        data: {
                services: [
                        {
                                name: 'Web Development',
                                price: 300,
                                active:true
                        },{
                                name: 'Design',
                                price: 400,
                                active:false
                        },{
                                name: 'Integration',
                                price: 250,
                                active:false
                        },{
                                name: 'Training',
                                price: 220,
                                active:false
                        }
                ],
        },
    methods: {
        toggleActive: function(s){
            s.active = !s.active;
        },
        total: function(){

                var total = 0;

                this.services.forEach(function(s){
                        if (s.active){
                                total+= s.price;
                        }
                });

           return total;
        }
    }
});

var listOrGrid = new Vue({
        el: '#list-grid',
        data: {
                articles: [
                        {
                                title: 'marcos',
                                url: '',
                                img: ''
                        }
                ],
                layout: 'list'
        }
});