const Countrydata = async () => {
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjMyOWFmYzg3MjNhOTQwMDJlZmYxZTdjIiwiYXBpU2VjcmV0IjoiOWIwYmQ5NzYtNzQ2NC1kMjNlLTVmNjMtOTdhZGIyNDJlZDI0IiwiYWxsb3dlZFRlbmFudHMiOlsiNWZlZGVkNWFmYjFjZTIwMDFhMWQ5YmY4Il0sInRlbmFudElkIjoiNWZlZGVkNWFmYjFjZTIwMDFhMWQ5YmY4IiwiaWF0IjoxNzA2ODY4NzU4fQ.ItEtcHn8ey8iHBHRcZyFD3I2Runmo_c4oFmB7QVCzXM";

  try {
    const response = await fetch(
      "https://bi.cestrategy.us/api/datasources/SampleECommerce/jaql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          datasource: "Sample ECommerce",
          metadata: [
            {
              datatype: "text",
              dim: "[Country.Country]",
              title: "Country",
              filter: {
                $distinct: {
                  field: "[Country.Country]",
                },
              },
            },
          ],
        }),
      }
    );
    const data = await response.json();
    const countries = data.values.map((item: any[]) => item[0]);
    console.log("Countries Data", countries);
    return countries;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export default Countrydata;
