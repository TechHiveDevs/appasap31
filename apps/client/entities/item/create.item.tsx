
import { 
  Create,
  SimpleForm,
  
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateItem(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <ReferenceInput label="order" source="orderid" reference="order">
        <AutocompleteInput variant="outlined" /* optionText="order"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
