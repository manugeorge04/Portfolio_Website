import {
  AzureNamedKeyCredential,
  TableClient,
} from "@azure/data-tables";

export async function POST(req) {
  if (req.method === "POST") {
    const { uuid, query, answer, count } = await req.json();
    const accountName =
      process.env.AZURE_STORAGE_ACCOUNT_NAME;
    const accountKey =
      process.env.AZURE_STORAGE_ACCOUNT_KEY;
    const tableName = "ChatLogs";

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
        partitionKey: uuid,
        rowKey: String(count),
        query: query,
        answer: answer,
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
          error: error,
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