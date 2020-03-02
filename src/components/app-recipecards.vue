<template>
 
<div class="cardholder">
            <div class="card">
                <a :href='recipiApi.sourceUrl' >
                    <img class="card-img-top" :src="recipiApi.image">
                    <div class="card-body">
                        <h5 class="card-title"> {{recipiApi.title}} </h5>
                        <ul style="list-style: none;">
                            <li>Calories: {{recipiApi.nutrition[0].amount | numeral('0,0')}} Kcal</li>
                            <li>Protein: {{recipiApi.nutrition[1].amount | numeral('0,0')}} g</li>
                            <li>Fat: {{recipiApi.nutrition[2].amount | numeral('0,0')}} g</li>
                            <li>Carbohydrates: {{recipiApi.nutrition[3].amount | numeral('0,0')}} g</li>
                        </ul>
                        <p class="card-text, text-muted">
                            <font-awesome-icon icon="clock" />~ {{recipiApi.preparationMinutes || 30}} min</p>
                    </div>
                </a>
            </div>
</div>



</template>
<script>
    export default {
        name: 'recipeCard',
        data() {
            return {
                title: 'recipeCard'
            }
        },
        props: {
            recipiApi: {
                type: Object,
                required: true,
            },
        },
    }
</script>

<style scoped>


    h1 {
        color: #fff;
        padding: 10px 0;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        border: none;

 
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
    }

    .card a {
        color: initial;
    }

    .card a:hover {
        text-decoration: initial;
    }

    .card .text-muted i {
        margin: 0 10px;
    }
</style>