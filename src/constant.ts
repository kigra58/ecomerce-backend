
interface IAPIResponse{
  success:boolean;
  message:string;
  data:[];
  error:null|undefined;
  statusCode?:number;
}

export const apiResponse:IAPIResponse={
  success:false,
  message:"",
  data:[],
  error:null
}