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

export const readCSVFile=(stream: Readable)=>{
    let data;
    stream.on('data', (chunk:string) => {
       data=CSVToJSON(chunk);
    });
    return data;
}
  