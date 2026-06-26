import fs from 'fs';
import {parse} from 'csv-parse/sync';

export class DataProvider {
    static getTestDataFromJson (filepath: string)
    {
        let data:string=JSON.parse(fs.readFileSync(filepath, 'utf-8'));
        return data;
    }

    static getTestDataFromCsv (filepath: string)
    {
        let data:string=fs.readFileSync(filepath, 'utf-8');
        let records:any=parse(data, {columns:true, skip_empty_lines:true});
        return records;
    }
}    