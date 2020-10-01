<template>
    <div class="card">
        <div class="card-body">
            <h1>Welcome to Stock Trading Website</h1>
            <p>
                Go to "Stocks" page to start trading.<br/>
                You may Save & Load your Data.<br/>
                Click on "End Day" to begin a new Day!
            </p>
            <hr>
            <strong>Your Funds: {{ getFunds | currency }}</strong>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: mapGetters(['getFunds'])
    }
</script>
