import {
  AzureNamedKeyCredential,
  TableClient,
} from "@azure/data-tables";

export async function POST(req) {
  if (req.method === "POST") {
    const { email, subject, message } = await req.json();
    const accountName =
      process.env.AZURE_STORAGE_ACCOUNT_NAME;
    const accountKey =
      process.env.AZURE_STORAGE_ACCOUNT_KEY;
    const tableName = "Contacts";

    try {
      const credential =
        new AzureNamedKeyCredential(
          accountName,
          accountKey
        );
      const client = new TableClient(
        `https://${accountName}.table.core.windows.net`,
        tableName,
        credential
      );

      const entity = {
        partitionKey: email,
        rowKey: email + "_" + Date.now(),
        subject: subject,
        content: message,
      };

      await client.createEntity(entity);

      return new Response(
        JSON.stringify({
          message: "Data added successfully",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

    } catch (error) {
      console.error(error);
      return new Response(
        JSON.stringify({
          error:
            "Failed to add data to Azure Table",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  } else {
   return new Response(
     JSON.stringify({
       error: "Method Not Allowed",
     }),
     {
       status: 405,
       headers: {
         "Content-Type": "application/json",
       },
     }
   );
  }
}