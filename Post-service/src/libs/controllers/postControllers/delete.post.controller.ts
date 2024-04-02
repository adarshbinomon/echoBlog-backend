import { Request, Response } from "express";
import { dependencies } from "../../../utils/dependency.interface";

export default(dependencies: dependencies)=>{
    const{
        useCase: {deletePost_useCase}
    }=dependencies

    const deletePostController = async(req:Request, res:Response)=>{
        try {
            const id = req.params.id
            console.log('controller:', id);
            

            const response = await deletePost_useCase(dependencies).executeFunction(id)

            if(response.status){
                res.status(202).json({status: true, message:'post deleted succesfully.'})
            }else{
                res.status(500).json({status: false,messge: 'post deletion failed'})
            }
        } catch (error) {
            res.status(500).json({status: false,messge: 'post deletion failed'})

        }
    }
    return deletePostController
}