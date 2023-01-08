import axios from "axios";
type errorMessage= {
  message: string;
}

type User = {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: Number;
  createdAt: Number;
};

async function getUsers() {
  try {
    //  const data: GetUsersResponse
    const { data, status } = await axios.get<User>(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    console.log(JSON.stringify(data, null, 4));

    //  "response status is: 200"
    console.log("response status is: ", status);

    return data;
  } catch (error) {
    if (error) {
      console.error("error", error);
    }
    // if (axios.isAxiosError(error)) {
    //   console.log("error message: ", error.message);
    //   return error.message;
    // } else {
    //   console.log("unexpected error: ", error);
    //   return "An unexpected error occurred";
    // }
  }
}

getUsers();
