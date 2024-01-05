
      let a = document.querySelector("#parent");
      let b = false;
      if (window.innerWidth < 768) {
        document
          .querySelector("#parent")
          .addEventListener("touchstart", (e) => {
            let elem = e.target;
            console.log("e", elem);
            let row = elem.parentElement.parentElement;
            console.log("p", row);
            if (row.className === "col-2") {
              row = elem.parentElement.parentElement.parentElement;
              console.log("1");
            } else if (row.className === "parent") {
              row = elem.parentElement;
              console.log("2");
            }
            if (!b) {
              row.lastChild.previousElementSibling.style.display = "block";
              row.children[1].firstElementChild.style.display = "none";
              row.children[1].lastElementChild.style.display = "block";
              b = true;
              console.log("3");
            } else if (b) {
              row.lastChild.previousElementSibling.style.display = "none";
              row.children[1].firstElementChild.style.display = "block";
              row.children[1].lastElementChild.style.display = "none";
              b = false;
              console.log("4");
            }
          });
      } else {
        document.querySelector("#parent").addEventListener("click", (e) => {
          let elem = e.target;
          console.log("e", elem);
          let row = elem.parentElement.parentElement;
          console.log("p", row);
          if (row.className === "col-2") {
            row = elem.parentElement.parentElement.parentElement;
            console.log("1");
          } else if (row.className === "parent") {
            row = elem.parentElement;
            console.log("2");
          }
          if (!b) {
            row.lastChild.previousElementSibling.style.display = "block";
            row.children[1].firstElementChild.style.display = "none";
            row.children[1].lastElementChild.style.display = "block";
            b = true;
            console.log("3");
          } else if (b) {
            row.lastChild.previousElementSibling.style.display = "none";
            row.children[1].firstElementChild.style.display = "block";
            row.children[1].lastElementChild.style.display = "none";
            b = false;
            console.log("4");
          }
        });
      }
