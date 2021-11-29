<template>
<div>
    <Systembar></Systembar>
    <Appbar :items="items"></Appbar>
    <v-subheader>Light status bar</v-subheader>
</div>
</template>

<script>
    import Appbar from '@/components/Appbar'
    import Systembar from '@/components/Systembar'
    export default{
        props: ["items"],
        components:{
             Systembar,
             Appbar
        },
    }
    
</script>
