const baseUrl = "https://api.telegram.org/bot6653111274:AAHZc4GHmGj7WR-uDeuAjvaYf6OV6Xjhl1s/";
export const sendMessage = async (message)  => {
  const url = `${baseUrl}sendMessage?chat_id=-4098488431&text=${message}`;

  const response = await fetch(url);

  if(!response.ok) {
    const error = await response.json();

    await Promise.reject(error.description || "Something went wrong(error)");
  }
  console.log("response", response);
};