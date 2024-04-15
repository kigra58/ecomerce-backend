import fs from "fs";
import path from "path"
import csv from "csvtojson"
import {  ICSVROW } from "../interfaces";


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




  