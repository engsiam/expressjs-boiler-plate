
//Create

export const createTask = async (req,res)=>{
return res.status(201).send({message: 'Task created'})
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