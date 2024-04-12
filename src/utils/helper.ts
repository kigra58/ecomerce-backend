import fs from "fs";
import path from "path"
import { Readable } from "stream";



interface CSVRow {
    [key: string]: string;
};
  
export const CSVToJSON = (data: string, delimiter = ','): CSVRow[] => {
    const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
    return data
      .slice(data.indexOf('\n') + 1)
      .split('\n')
      .map((v: string): CSVRow => {
        const values = v.split(delimiter);
        return titles.reduce(
          (obj: CSVRow, title: string, index: number) => ({
            ...obj,
            [title]: values[index],
          }),
          {} as CSVRow
        );
      });
};

// export const readCSVFile=(fileId:string)=>{
//    const data:unknown[]=[] 
//    const dirCodes=path.join(__dirname,"uploads");
//    const filePath=path.join(dirCodes,fileId);
//    const readStream =fs.createReadStream(filePath, "utf8");
//    readStream.on('File Stream Error', function (error) {
//     console.log(`error: ${error.message}`);
//    });

//     readStream.on('data', (chunk:string) => {
//       if(CSVToJSON(chunk) && CSVToJSON(chunk).length>0){
//         for(const i of  CSVToJSON(chunk)){
//               data.push(i)
//           };
//       };
//     });
//     return data;
// }

export async function readCSVFile(fileId: string): Promise<CSVRow[]> {
  let data: CSVRow[] = [];
  const dirCodes = path.join(__dirname, "uploads");
  const filePath = path.join(dirCodes, fileId);

  const readStream = fs.createReadStream(filePath, "utf8");

  try {
    for await (const chunk of readStream) {
      data.push(...CSVToJSON(chunk));
    };
    return data;
  } catch (error) {
    console.error(error);
    return []; // Handle errors by returning an empty array (optional)
  }
}

  