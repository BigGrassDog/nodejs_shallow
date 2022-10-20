var elogin = document.querySelector("#login");
      var plogin = document.querySelector("#loginPost");
      var username = document.querySelector("#username");
      var password = document.querySelector("#password");

      elogin.onclick = () => {
        // console.log(username.value, password.value);

        // get 请求
        fetch(
          `/api/login?username=${username.value}&password=${password.value}`
        )
          .then(res => res.text())
          .then((res) => {
            console.log(res);
          });
      };

      // post 请求
      plogin.onclick = () => {
        fetch(`/api/loginpost`, {
          method: "POST",
          body: JSON.stringify({
            username: username.value,
            password: password.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(res => res.text())
          .then((res) => {
            console.log(res);
          });
      };