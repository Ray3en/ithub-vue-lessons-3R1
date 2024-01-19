<template>
    <ul>
        <li v-for="(number, index) in numbers" :key="index">
            {{number + ' ' + index }}
        </li>
    </ul>
    <div>
        <p 
            v-for="product in products" 
            :key="product.id" 
            :id="`elem_${product.id}`"
        >
            {{ product.title }}
        </p>
    </div>
    <div class="cards_wrapper">
        <div v-for="elem in data" class="card">
            <img :src="elem.image" width="250" height="250"/>
            <h3>{{ elem.title }}</h3>
            <p>{{ elem.brand }}</p>
            <p>{{ elem.price }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                numbers: [10,20,30,40,50],
                products: [
                    {id: 1, title: 'Велосипед'},
                    {id: 2, title: 'Самокат'},
                    {id: 3, title: 'Ролики'},
                ],
                data: [
                    {id: 1, title: 'Iphone X', image: 'https://www.einfo.co.nz/media/catalog/product/cache/a38d1c83e0d63148b81a03ec284a15b5/i/2/i256s_4.jpg', brand: 'Apple', price: 1000, description: 'smartphone'},
                    {id: 2, title: 'Game NoteBook', image: 'https://tec.by/images/stories/virtuemart/product/asus-rog-strix-g15-g513qe-3.jpg', brand: 'Asus', price: 3000, description: 'notebook'},
                    {id: 3, title: 'Galaxy S33', image: 'https://img.global.news.samsung.com/global/wp-content/uploads/2018/09/galaxy-a7_main_1.jpg', brand: 'Samsung', price: 1300, description: 'smartphone'},
                ]
            }
        }
    }

</script>

<style>
    .cards_wrapper{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 50px;
        justify-items: center;
    }

    .card{
        padding: 10px;
        width: 300px;
        height: 350px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        background-color: bisque;
        border-radius: 15px;
        border: 1px solid black;

    }
</style>
