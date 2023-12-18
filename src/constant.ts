
interface IAPIResponse{
  success:boolean;
  message:string;
  data:[]
  error:null|undefined
}

export const apiResponse:IAPIResponse={
  success:false,
  message:"",
  data:[],
  error:null
}