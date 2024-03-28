import { z } from "zod";
import { paramsIdValidation } from "../../commonValidation";

export const userIdValidation = z.object({
    userId:paramsIdValidation("userId","User id is required"), 
});


export const userListValidation = z.object({
    userId:paramsIdValidation("userId","User id is required"), 
});


