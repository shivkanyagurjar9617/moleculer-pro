//1.named export 
module.exports = {
    //1.property:value
    name: "teacher",
    //2.method

    actions: {
        teacherRoute:{
            rest:{
                method:"GET",
                path:"/teacherRoute"
            },
            async handler(ctx){
                return `hello ${ctx.params.name}`
            }

        }

    },
   
    created(){

    },
    async started(){

    },
    async stopped(){

    },

}