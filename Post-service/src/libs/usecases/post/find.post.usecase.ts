export const getPost_useCase= (dependencies: any) =>{
    const {repository: {postRepository}} = dependencies;

    const executeFunction = async (id: string) => {
        try {
          const response = await postRepository?.getPost(id);
    
          if (response.status) {
            return {
              status: true,
              message: response.message,
              post: response.post,
            };
          } else {
            return { status: false, message: response.message };
          }
        } catch (error) {
          console.log("error", error);
    
          return { status: false, message: 'error in find user post use case' };
        }
      };
    
      return { executeFunction };
    };
    