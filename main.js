function displayTable() {
      let firstName = document.getElementById("first-name").value;
      let lastName = document.getElementById("last-name").value;
      let birthdate = document.getElementById("birthdate").value;
      let gender = document.querySelector('input[name="gender"]:checked').value;
      let city = document.getElementById("city").value;
      let address = document.getElementById("address").value;
      let languages = [];
      let language1 = document.getElementById("language1");
      let language2 = document.getElementById("language2");
      let language3 = document.getElementById("language3");

      if (language1.checked) {
        languages.push(language1.value);
      }
      if (language2.checked) {
        languages.push(language2.value);
      }
      if (language3.checked) {
        languages.push(language3.value);
      }

      let tableBody = document.getElementById("table-body");
      let newRow = tableBody.insertRow();
      let cell1 = newRow.insertCell();
      let cell2 = newRow.insertCell();
      let cell3 = newRow.insertCell();
      let cell4 = newRow.insertCell();
      let cell5 = newRow.insertCell();
      let cell6 = newRow.insertCell();
      let cell7 = newRow.insertCell();

      cell1.innerHTML = firstName;
      cell2.innerHTML = lastName;
      cell3.innerHTML = birthdate;
      cell4.innerHTML = gender;
      cell5.innerHTML = city;
      cell6.innerHTML = address;
      cell7.innerHTML = languages.join(", ");

      document.getElementById("registration-form").style.display = "none";
      document.getElementById("registration-table").style.display = "block";
    }

