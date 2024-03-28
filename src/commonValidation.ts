import {ZodTypeAny, z} from "zod";


interface IQuery {
  key: string;
  errorMsg: string;
}


export const passwordValidation=(key:string,errorMsg:string):ZodTypeAny=>{
 return z.object({
   [key]: z.string({required_error: errorMsg}).min(8).max(16)
});
};

export const emailValidation=():ZodTypeAny=>{
 return z.object({
   email: z.string({required_error: "Email is required"}).email("Not a valid email")
});
};


export const emptyStringValidation=(key:string,errorMsg:string):ZodTypeAny=>{
  return z.object({
    [key]: z.string({required_error: errorMsg}).min(3).max(20)
 });
 };


export const paramsIdValidation=(key:string,errorMsg:string):ZodTypeAny=>{
  return z.object({
    [key]: z.number({required_error: errorMsg})
  });
};


// export const queryValidation=(...arg:IQuery[]) =>{
//  return arg.forEach((it)=>z.object({
//      [it.key]: z.number({required_error: it.errorMsg})
//   }))
// };