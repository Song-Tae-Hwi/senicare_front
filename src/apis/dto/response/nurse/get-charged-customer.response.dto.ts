import ChargedCustomer from "src/types/charged-customer.interface";
import ResponseDto from "../response.dto";

// interface: get charged customer response body dto //
export default interface GetChargedCustomerResponseDto extends ResponseDto {
  customers: ChargedCustomer[];
}