import { useState } from "react";
import { USER_TYPE } from "../utils/constants";

const { JOB_SEEKER, RECRUITER } = USER_TYPE;

const useUserType = (defaultUserType = JOB_SEEKER) => {
    const [userType, setUserType] = useState(defaultUserType);

    const userLowerCase = userType ? userType.toLowerCase() : "";
    const alternateUser = userType === JOB_SEEKER ? RECRUITER : JOB_SEEKER;

    const updateUserType = (newUserType) => {
        setUserType(newUserType);
    };

    return { userLowerCase, alternateUser: alternateUser.toLowerCase(), updateUserType, userType };
};

export default useUserType;
