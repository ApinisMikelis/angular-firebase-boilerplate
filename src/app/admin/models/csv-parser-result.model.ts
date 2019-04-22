import { SpreadsheetImportModel } from './spreadsheet-import.model';

export interface CSVParserResultModel {
     data: SpreadsheetImportModel[];
     errors: any[];
     meta: {
          aborted: boolean;
          cursor: number;
          delimiter: string;
          fields: string[];
          linebreak: string;
          truncated: boolean;
     };
}
