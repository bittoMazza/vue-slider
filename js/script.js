

const app = new Vue(
    {
        el:'#app',
        data: {
            indexImage : 0,
            thumbnail : document.getElementsByClassName('thumb'),
            intervalElement : null,
            slides : [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],
        },
        methods: {
            nextSlide : function(){
                this.indexImage++;
                if(this.indexImage === this.slides.length){
                    this.indexImage = 0
                }
                
            },
            previousSlide : function(){
                this.indexImage--;
                if(this.indexImage == -1){
                    this.indexImage = this.slides.length - 1
                }
                
            },
            clickedThumb : function(indice){
                this.indexImage = indice;
            }
            
        },
        /* created(){
            intervalElement = setInterval(this.nextSlide,3000)
        }
         */

    }
    
)

