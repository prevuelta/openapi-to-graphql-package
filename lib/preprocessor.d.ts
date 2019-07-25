import { Oas3, SchemaObject, LinkObject } from "./types/oas3";
import { InternalOptions } from "./types/options";
import { DataDefinition } from "./types/operation";
import { PreprocessingData } from "./types/preprocessing_data";
import * as Oas3Tools from "./oas_3_tools";
/**
 * Extract information from the OAS and put it inside a data structure that
 * is easier for OpenAPI-to-GraphQL to use
 */
export declare function preprocessOas(
  oass: Oas3[],
  options: InternalOptions
): PreprocessingData;
export declare function createDataDef(
  names: Oas3Tools.SchemaNames,
  schema: SchemaObject,
  isInputObjectType: boolean,
  data: PreprocessingData,
  links?: {
    [key: string]: LinkObject;
  },
  oas?: Oas3
): DataDefinition;
