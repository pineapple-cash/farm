Moralis.initialize("4Pp7HcDpTbRQ1iaBOvbsZ0nLab85QRG3M2iukLT6"); // Application id from moralis.io
Moralis.serverURL = "https://sipuqul9does.moralis.io:2053/server"; //Server url from moralis.io

async function login() {
    try {
        user = await Moralis.Web3.authenticate();
        console.log(user);
        Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
}),
    } catch (error) {
        console.log(error);
    }
}

document.getElementById("login_button").onclick = login;
