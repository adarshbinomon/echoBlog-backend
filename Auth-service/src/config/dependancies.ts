import {authenticationRepository} from '../libs/app/repository'
import {addUser_useCases} from '../libs/usecases'

const useCase:any={
    addUser_useCases
}

const repository:any={
    authenticationRepository
}

export default {
    useCase, repository
}