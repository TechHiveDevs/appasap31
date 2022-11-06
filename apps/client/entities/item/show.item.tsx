
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowItem(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<ReferenceField source="orderid" reference="order" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}