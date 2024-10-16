import CareRecord from "src/types/care-record.interface";
import ResponseDto from "../response.dto";

// interface: get care record response body dto //
export default interface GetCareRecordListResponseDto extends ResponseDto {
  careRecords: CareRecord[];
}