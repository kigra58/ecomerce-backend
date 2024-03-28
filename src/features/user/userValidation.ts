import { z } from "zod";
import { listValidation, paramsIdValidation } from "../../commonValidation";
import { userListFilterENUM } from "../../constant";

export const userIdValidation = z.object({
    userId:paramsIdValidation("userId","User id is required"), 
});

export const userListValidation = listValidation(userListFilterENUM);



