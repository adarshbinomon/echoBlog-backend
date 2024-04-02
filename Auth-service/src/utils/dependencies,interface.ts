export interface dependencies {
    useCase:        UseCase;
    consumeUsecase: ConsumeUsecase;
    repository:     Repository;
}

export interface ConsumeUsecase {
    updateUserUsecase: Function;
}

export interface Repository {
    authenticationRepository: AuthenticationRepository;
}

export interface AuthenticationRepository {
    userEmailExist: Function;
    createUser:     Function;
    findUser:       Function;
    findAdmin:      Function;
    updateUser:     Function;
}

export interface UseCase {
    addUser_useCases:        Function;
    verifyOtp_useCase:       Function;
    userLogin_useCase:       Function;
    adminLogin_useCase:      Function;
    userGoogleLogin_useCase: Function;
    resendOtp_useCase:       Function;
}
