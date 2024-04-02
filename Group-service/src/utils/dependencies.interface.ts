export interface dependencies {
    useCase:        UseCase;
    consumeUsecase: ConsumeUsecase;
    repository:     Repository;
}

export interface ConsumeUsecase {
    createUserUsecase: Function;
    updateUserUsecase: Function;
}

export interface Repository {
    communityRepository: CommunityRepository;
}

export interface CommunityRepository {
    createCommunity:       Function;
    getCommunityWithId:    Function;
    createUser:            Function;
    updateUser:            Function;
    findAllCommunities:    Function;
    joinCommunity:         Function;
    getUserCommunities:    Function;
    editCommunitySettings: Function;
}

export interface UseCase {
    createCommunity_usecase:    Function;
    getCommunity_useCase:       Function;
    getAllCommunities_useCase:  Function;
    joinCommunity_useCase:      Function;
    getUserCommunities_useCase: Function;
    editCommunity_useCase:      Function;
}
