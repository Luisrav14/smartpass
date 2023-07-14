//

const sendMail = async ({ name, email, message }) => {
  const id_inbox = "12312312";
  const url = `https://sandbox.api.mailtrap.io/api/send/${id_inbox}`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Api-Token": "",
    },
    body: `{
      to: [{ email: "john_doe@example.com", name: "John Doe" }],
      from: { email: ${email}, name: ${name} },
      attachments: [{ content: "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCiAgICA8aGVhZD4KICAgICAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIj4KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KCiAgICA8L2JvZHk+Cgo8L2h0bWw+Cg==", filename: "index.html", type: "text/html", disposition: "attachment" }],
      custom_variables: { user_id: "45982", batch_id: "PSJ-12" },
      headers: { "X-Message-Source": "dev.mydomain.com" },
      subject: "SMARTPASS Contacr",
      text: ${message},
      category: "API Test",
    }`,
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export default sendMail;
