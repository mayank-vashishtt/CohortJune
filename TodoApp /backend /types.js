const zod = require('zod');


const createTodoSchema = zod.object({
    title : zod.string(),
    description : zod.string().optional()
});

const updateTodoSchema = zod.object({
    id : zod.string()
})


module.exports = {
    createTodoSchema : createTodoSchema, 
    updateTodoSchema : updateTodoSchema
}