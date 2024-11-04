
//Create

export const createBlog = async (req,res)=>{
return res.status(201).send({message: 'Blog created successfully'})
}

//read
export const readTask = async (req,res)=>{
    return res.status(201).send({message: 'Task read'})
}

//update
export const updateTask = async (req,res)=>{
    return res.status(201).send({message: 'Task updated'})
}

//delete
export const deleteTask = async (req,res)=>{
    return res.status(201).send({message: 'Task deleted'})
}