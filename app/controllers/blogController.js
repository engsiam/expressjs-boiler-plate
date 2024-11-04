
//Create

export const createBlog = async (req,res)=>{
return res.status(201).send({message: 'Blog created successfully'})
}

//read
export const readBlog = async (req,res)=>{
    return res.status(201).send({message: 'Blog read successfully'})
}

//update
export const updateBlog = async (req,res)=>{
    return res.status(201).send({message: 'Blog update successfully'})
}

//delete
export const deleteBlog = async (req,res)=>{
    return res.status(201).send({message: 'Blog delete successfully'})
}