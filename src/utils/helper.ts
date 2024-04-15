import fs from "fs";
import path from "path"
import csv from "csvtojson"
import {  ICSVROW } from "../interfaces";


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


export async function readCSVFile(fileId: string): Promise<ICSVROW[]> {
  try {
    const dirCodes = path.join(__dirname, "uploads");
    const filePath = path.join(dirCodes, fileId);
    const readStream = fs.createReadStream(filePath, "utf8");
    return readStream.pipe(csv());
  } catch (error) {
    console.error(error);
    return []; 
  };
};


export function getUniqueTitles(arr:ICSVROW[]) {
  const uniqueTitles:{[key: string]:boolean;} = {};
  const uniqueArray:ICSVROW[] = [];
  arr.forEach(item => {
    if (!uniqueTitles[item.category]) {
      uniqueTitles[item.category] = true;
      uniqueArray.push(item);
    }
  });
  return uniqueArray;
}




  